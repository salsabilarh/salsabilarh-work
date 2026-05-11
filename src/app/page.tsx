"use client";

import { useState, useEffect, useRef, createContext, useContext, ReactNode } from "react";

interface LangContextType {
  lang: "en" | "id";
  setLang: (lang: "en" | "id") => void;
}

interface ThemeContextType {
  dark: boolean;
  setDark: (dark: boolean) => void;
}

const LangContext = createContext<LangContextType>({ lang: "en", setLang: () => {} });
const ThemeContext = createContext<ThemeContextType>({ dark: true, setDark: () => {} });

const content = {
  en: {
    nav: { projects: "Projects", skills: "Skills", experience: "Experience", contact: "Contact", hire: "Hire Me" },
    hero: {
      greeting: "Hello, I'm",
      name: "Salsabila Rafifah Handifa",
      role: "Fullstack Developer",
      tagline: "Fullstack Developer who ships production-grade systems from architecture to deployment.",
      sub: "I specialize in Node.js and Go backends with React.js frontends — applying Clean Architecture and automated CI/CD to deliver scalable, secure applications that pass QA on the first review.",
      cta1: "View Projects",
      cta2: "Download Resume",
      cta3: "Get In Touch",
      stats: [
        { value: "50+", label: "REST APIs Built" },
        { value: "100%", label: "Test Coverage" },
        { value: "300+", label: "Concurrent Users" },
        { value: "#1", label: "HackIn Fest 2025" },
      ],
    },
    skills: {
      title: "Technologies I Work With",
      sub: "My stack is built around production-proven technologies. I don't chase trends — I choose tools that deliver reliability, performance, and maintainability at scale.",
      categories: [
        { name: "Backend & API", items: ["Node.js", "Express.js", "Hapi.js", "Golang", "Gin", "Fiber"], color: "#3b82f6" },
        { name: "Frontend", items: ["React.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"], color: "#8b5cf6" },
        { name: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Sequelize", "GORM"], color: "#10b981" },
        { name: "Security & Auth", items: ["JWT Dual-Token", "RBAC", "Argon2", "Bcrypt", "Helmet"], color: "#f59e0b" },
        { name: "DevOps & CI/CD", items: ["GitHub Actions", "Docker", "NGINX", "Railway", "AWS"], color: "#ef4444" },
        { name: "Testing & QA", items: ["Jest (100%)", "Apache JMeter", "Postman", "Unit & Integration", "Functional"], color: "#06b6d4" },
      ],
    },
    projects: {
      title: "Featured Projects",
      sub: "Each project represents a real-world problem solved with deliberate architecture choices.",
      filters: ["All", "Backend API", "Fullstack", "Enterprise", "Competition"],
      items: [
        {
          title: "SAKTI Platform",
          badge: "🏆 Juara 1 HackIn Fest 2025",
          type: ["Fullstack", "Competition", "Enterprise"],
          period: "Jul – Oct 2025 · PT Sucofindo",
          desc: "Centralized service catalog platform for BUMN with 142+ inspection services across 25+ work units. Full enterprise system with RBAC, signed URLs, and AI chatbot.",
          problem: "PT Sucofindo had 142+ inspection services scattered across 25+ work units with no centralized, searchable information system and no audit trail for sensitive document distribution.",
          solution: "Full-stack platform with Node.js + Express.js + MySQL backend and React.js + Tailwind frontend, featuring 5 combinable authorization middleware strategies and signed URL download audit trail.",
          impact: ["Sole developer: architecture to production in 3 months", "Zero critical defects at national competition live demo", "142 service records consolidated from 25 scattered datasets", "Champion — Inovasi Layanan, HackIn Fest 2025"],
          stack: ["Node.js", "Express.js", "React.js", "MySQL", "JWT", "Argon2", "Cloudinary", "Tailwind"],
          live: "https://sakti-drab.vercel.app",
          highlight: true,
        },
        {
          title: "Forum API",
          badge: "⭐ Perfect Score 5/5",
          type: ["Backend API"],
          period: "Jan 2026 · Dicoding Indonesia",
          desc: "Production-grade discussion platform with 4-layer Clean Architecture, 100% test coverage across 53 test files, and fully automated CI/CD pipeline.",
          problem: "Build a forum discussion API requiring clean architecture, secure auth, and comprehensive testability — all independent of framework and database.",
          solution: "REST API with 4-layer Clean Architecture (Domains, Applications, Interfaces, Infrastructures) using Hapi.js + PostgreSQL, with DI container and JWT dual-token auth.",
          impact: ["Perfect Score 5/5 from Dicoding", "100% test coverage in 53 test files", "N+1 query elimination via batched IN(…) + GROUP BY", "100% manual deployment steps eliminated via GitHub Actions"],
          stack: ["Node.js", "Hapi.js", "PostgreSQL", "Jest", "Docker", "NGINX", "GitHub Actions"],
          highlight: false,
        },
        {
          title: "DarusTrack API",
          badge: "300+ Concurrent Users",
          type: ["Backend API"],
          period: "Aug 2024 – Jun 2025 · SDIT Darussalam",
          desc: "Real-time academic monitoring system for school students with 60+ endpoints, LRU cache auth, and validated 300+ concurrent users via Apache JMeter.",
          problem: "Academic reports were only available every semester — too late for meaningful parent intervention. No real-time monitoring, no quick attendance notification.",
          solution: "Backend REST API with 60+ endpoints for 4 user roles, LRU-cached auth middleware, Redis-backed rate limiting, and 30+ composite DB indexes.",
          impact: ["Academic report intervals reduced from 4–6 months to real-time", "Zero critical failures under 300+ concurrent users (JMeter)", "100% pass rate on 100+ black-box test scenarios", "24/7 deployment on Railway cloud"],
          stack: ["Node.js", "Express.js", "MySQL", "Redis", "Sequelize", "JMeter", "Railway"],
          highlight: false,
        },
        {
          title: "OpenMusic API",
          badge: "⭐ Perfect Score 5/5",
          type: ["Backend API"],
          period: "Sep 2025 · Dicoding Indonesia",
          desc: "Music streaming backend with Redis cache-aside, RabbitMQ async export pipeline, and 100% non-blocking request handling.",
          problem: "Streaming platform needs high-traffic endpoint caching, non-blocking heavy operations like playlist export, and multi-process architecture for scalability.",
          solution: "Two-process system: API server + RabbitMQ consumer. Cache-aside Redis for album likes, async playlist export via message queue.",
          impact: ["Significant PostgreSQL load reduction via Redis cache layer", "100% non-blocking request handling for all export operations", "Perfect Score 5/5 from Dicoding"],
          stack: ["Node.js", "Hapi.js", "PostgreSQL", "Redis", "RabbitMQ", "Nodemailer"],
          highlight: false,
        },
        {
          title: "PT SISI e-Procurement",
          badge: "2 BUMN Platforms",
          type: ["Fullstack", "Enterprise"],
          period: "Oct 2025 – Apr 2026 · PT SISI",
          desc: "Frontend integration for enterprise e-procurement platforms at PT LEN Industri & PT Dahana, with zero sprint rollback across 5 Agile cycles.",
          problem: "Digitizing procurement at 2 BUMN companies requiring precise frontend-API integration with secure document handling and BUMN SLA compliance.",
          solution: "React.js and Vue.js frontend integration with strict API validation protocol, secure document access via Blob session-scoping, and FCM push notifications.",
          impact: ["100% functional approval on 20+ high-priority deliverables", "Zero sprint rollback across all 5 Agile sprints", "Zero API contract defects reaching both platforms", "Proactively eliminated document security gap outside task scope"],
          stack: ["React.js", "Vue.js", "REST API", "Firebase FCM", "Postman", "Agile/Scrum"],
          highlight: false,
        },
        {
          title: "Go Microservices",
          badge: "Golang Production",
          type: ["Backend API"],
          period: "Magang · PT Praisindo Teknologi",
          desc: "Two-tier Go microservices: Lecturer API (Fiber + Modular) and ToDoList API (Gin + Clean Architecture 4-layer) with interface-based dependency injection.",
          problem: "Build Go backend engineering foundation with Clean Architecture, interface-based dependency, and connection pooling before production involvement.",
          solution: "Lecturer API with Fiber + UUID v4 PKs; ToDoList API with Gin + Clean Architecture 4-layer, GORM hooks, and optimized DB connection pool.",
          impact: ["Go backend mastery from fundamentals to Clean Architecture", "Interface-based design transferrable to production", "Explicit connection pooling: 10 idle / 100 max / 1-hour lifetime"],
          stack: ["Go", "Gin", "Fiber", "PostgreSQL", "GORM", "Clean Architecture"],
          highlight: false,
        },
      ],
    },
    experience: {
      title: "Professional Experience",
      sub: "From intern to competition champion — every role sharpened my ability to deliver under pressure and own outcomes end-to-end.",
      items: [
        {
          role: "Fullstack Developer Intern",
          company: "PT Sinergi Informatika Semen Indonesia (PT SISI)",
          period: "Oct 2025 – Apr 2026",
          type: "Internship",
          points: ["Integrated React.js & Vue.js frontends for 2 BUMN e-procurement platforms", "100% functional approval on 20+ high-priority deliverables", "Zero sprint rollback across all 5 Agile sprints", "Proactively eliminated document security vulnerabilities beyond task scope"],
        },
        {
          role: "Sole Fullstack Developer",
          company: "PT Sucofindo — HackIn Fest 2025",
          period: "Jul – Oct 2025",
          type: "Competition",
          points: ["Sole developer of SAKTI platform from zero to production in 3 months", "Juara 1 (Champion) — Kategori Inovasi Layanan", "Zero critical defects at national competition live demo", "50+ REST API endpoints with RBAC and audit trail"],
        },
        {
          role: "Backend Developer Intern (Kerja Praktik)",
          company: "PT Praisindo Teknologi",
          period: "2024",
          type: "Internship",
          points: ["Developed Go microservices with Clean Architecture 4-layer", "Implemented interface-based dependency injection with GORM", "Zero blocker defects in QA review", "Established production-ready connection pooling patterns"],
        },
      ],
    },
    contact: {
      title: "Let's Build Something Together",
      sub: "I'm currently open to fullstack developer opportunities where I can contribute to meaningful products and grow with an ambitious team. If you're looking for someone who cares about architecture as much as shipping — let's talk.",
      email: "salsabilarafifahh@gmail.com",
      linkedin: "linkedin.com/in/salsabila-rh",
      github: "github.com/salsabilarh",
      whatsapp: "+62 812-4583-2984",
    },
    footer: "Built with Next.js · TypeScript · Tailwind CSS · Framer Motion",
  },
  id: {
    nav: { projects: "Proyek", skills: "Keahlian", experience: "Pengalaman", contact: "Kontak", hire: "Rekrut Saya" },
    hero: {
      greeting: "Halo, saya",
      name: "Salsabila Rafifah Handifa",
      role: "Fullstack Developer",
      tagline: "Fullstack Developer yang mengantarkan sistem production-grade dari arsitektur hingga deployment.",
      sub: "Saya spesialis backend Node.js dan Go dengan frontend React.js — menerapkan Clean Architecture dan CI/CD otomatis untuk mengantarkan aplikasi skalabel dan aman yang lulus QA dalam review pertama.",
      cta1: "Lihat Proyek",
      cta2: "Unduh Resume",
      cta3: "Hubungi Saya",
      stats: [
        { value: "50+", label: "REST API Dibangun" },
        { value: "100%", label: "Test Coverage" },
        { value: "300+", label: "Pengguna Bersamaan" },
        { value: "#1", label: "HackIn Fest 2025" },
      ],
    },
    skills: {
      title: "Teknologi yang Saya Gunakan",
      sub: "Stack saya dibangun di atas teknologi yang terbukti di produksi. Saya tidak mengejar tren — saya memilih tools yang memberikan keandalan, performa, dan keterpeliharaan di skala besar.",
      categories: [
        { name: "Backend & API", items: ["Node.js", "Express.js", "Hapi.js", "Golang", "Gin", "Fiber"], color: "#3b82f6" },
        { name: "Frontend", items: ["React.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"], color: "#8b5cf6" },
        { name: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Sequelize", "GORM"], color: "#10b981" },
        { name: "Keamanan & Auth", items: ["JWT Dual-Token", "RBAC", "Argon2", "Bcrypt", "Helmet"], color: "#f59e0b" },
        { name: "DevOps & CI/CD", items: ["GitHub Actions", "Docker", "NGINX", "Railway", "AWS"], color: "#ef4444" },
        { name: "Testing & QA", items: ["Jest (100%)", "Apache JMeter", "Postman", "Unit & Integration", "Functional"], color: "#06b6d4" },
      ],
    },
    projects: {
      title: "Proyek Unggulan",
      sub: "Setiap proyek merepresentasikan masalah nyata yang diselesaikan dengan pilihan arsitektur yang disengaja.",
      filters: ["Semua", "Backend API", "Fullstack", "Enterprise", "Kompetisi"],
      items: [
        {
          title: "Platform SAKTI",
          badge: "🏆 Juara 1 HackIn Fest 2025",
          type: ["Fullstack", "Kompetisi", "Enterprise"],
          period: "Jul – Okt 2025 · PT Sucofindo",
          desc: "Platform katalog layanan terpusat untuk BUMN dengan 142+ layanan inspeksi di 25+ unit kerja. Sistem enterprise lengkap dengan RBAC, signed URL, dan AI chatbot.",
          problem: "PT Sucofindo memiliki 142+ layanan tersebar di 25+ unit kerja tanpa sistem informasi terpusat dan tanpa audit trail untuk distribusi dokumen sensitif.",
          solution: "Platform full-stack dengan backend Node.js + Express.js + MySQL dan frontend React.js + Tailwind, menampilkan 5 strategi middleware otorisasi yang dapat dikombinasikan dan signed URL download audit trail.",
          impact: ["Sole developer: dari arsitektur hingga produksi dalam 3 bulan", "Zero critical defects pada live demo kompetisi nasional", "142 catatan layanan dikonsolidasi dari 25 dataset tersebar", "Juara 1 — Inovasi Layanan, HackIn Fest 2025"],
          stack: ["Node.js", "Express.js", "React.js", "MySQL", "JWT", "Argon2", "Cloudinary", "Tailwind"],
          live: "https://sakti-drab.vercel.app",
          highlight: true,
        },
        {
          title: "Forum API",
          badge: "⭐ Nilai Sempurna 5/5",
          type: ["Backend API"],
          period: "Jan 2026 · Dicoding Indonesia",
          desc: "Platform forum diskusi production-grade dengan 4-layer Clean Architecture, 100% test coverage di 53 file pengujian, dan pipeline CI/CD otomatis penuh.",
          problem: "Membangun forum diskusi API yang memerlukan arsitektur bersih, autentikasi aman, dan kemampuan pengujian menyeluruh — semua independen dari framework dan database.",
          solution: "REST API dengan Clean Architecture 4-layer (Domains, Applications, Interfaces, Infrastructures) menggunakan Hapi.js + PostgreSQL, dengan DI container dan JWT dual-token auth.",
          impact: ["Nilai Sempurna 5/5 dari Dicoding", "100% test coverage di 53 file pengujian", "Eliminasi query N+1 via batched IN(…) + GROUP BY", "100% langkah deployment manual dieliminasi via GitHub Actions"],
          stack: ["Node.js", "Hapi.js", "PostgreSQL", "Jest", "Docker", "NGINX", "GitHub Actions"],
          highlight: false,
        },
        {
          title: "DarusTrack API",
          badge: "300+ Pengguna Bersamaan",
          type: ["Backend API"],
          period: "Agu 2024 – Jun 2025 · SDIT Darussalam",
          desc: "Sistem monitoring akademik real-time untuk siswa sekolah dengan 60+ endpoint, LRU cache auth, dan validasi 300+ pengguna bersamaan via Apache JMeter.",
          problem: "Laporan akademik hanya tersedia setiap semester — terlambat untuk intervensi orang tua. Tidak ada monitoring real-time atau notifikasi absensi cepat.",
          solution: "Backend REST API dengan 60+ endpoint untuk 4 peran pengguna, LRU-cached auth middleware, Redis-backed rate limiting, dan 30+ composite DB index.",
          impact: ["Interval laporan akademik berkurang dari 4–6 bulan menjadi real-time", "Zero kegagalan kritis di bawah 300+ pengguna bersamaan (JMeter)", "100% tingkat kelulusan pada 100+ skenario black-box test", "Deployment 24/7 di cloud Railway"],
          stack: ["Node.js", "Express.js", "MySQL", "Redis", "Sequelize", "JMeter", "Railway"],
          highlight: false,
        },
        {
          title: "OpenMusic API",
          badge: "⭐ Nilai Sempurna 5/5",
          type: ["Backend API"],
          period: "Sep 2025 · Dicoding Indonesia",
          desc: "Backend platform streaming musik dengan Redis cache-aside, pipeline async export RabbitMQ, dan 100% non-blocking request handling.",
          problem: "Platform streaming membutuhkan caching endpoint traffic tinggi, operasi berat non-blocking seperti export playlist, dan arsitektur multi-proses untuk skalabilitas.",
          solution: "Sistem dua proses: API server + consumer RabbitMQ. Cache-aside Redis untuk like album, export playlist async via message queue.",
          impact: ["Pengurangan load PostgreSQL signifikan via Redis cache layer", "100% non-blocking request handling untuk semua operasi export", "Nilai Sempurna 5/5 dari Dicoding"],
          stack: ["Node.js", "Hapi.js", "PostgreSQL", "Redis", "RabbitMQ", "Nodemailer"],
          highlight: false,
        },
        {
          title: "e-Procurement PT SISI",
          badge: "2 Platform BUMN",
          type: ["Fullstack", "Enterprise"],
          period: "Okt 2025 – Apr 2026 · PT SISI",
          desc: "Integrasi frontend untuk platform e-procurement enterprise di PT LEN Industri & PT Dahana, dengan zero sprint rollback di 5 siklus Agile.",
          problem: "Digitalisasi pengadaan di 2 perusahaan BUMN memerlukan integrasi frontend-API yang presisi dengan penanganan dokumen aman dan kepatuhan SLA BUMN.",
          solution: "Integrasi frontend React.js dan Vue.js dengan protokol validasi API ketat, akses dokumen aman via Blob session-scoping, dan push notification FCM.",
          impact: ["100% persetujuan fungsional di 20+ deliverable prioritas tinggi", "Zero sprint rollback di seluruh 5 siklus Agile sprint", "Zero API contract defects yang mencapai kedua platform", "Proaktif eliminasi celah keamanan akses dokumen di luar cakupan tugas"],
          stack: ["React.js", "Vue.js", "REST API", "Firebase FCM", "Postman", "Agile/Scrum"],
          highlight: false,
        },
        {
          title: "Go Microservices",
          badge: "Golang Produksi",
          type: ["Backend API"],
          period: "Magang · PT Praisindo Teknologi",
          desc: "Dua tingkat Go microservices: Lecturer API (Fiber + Modular) dan ToDoList API (Gin + Clean Architecture 4-layer) dengan interface-based dependency injection.",
          problem: "Membangun fondasi engineering backend Go dengan Clean Architecture, interface-based dependency, dan connection pooling sebelum terlibat ke proyek produksi.",
          solution: "Lecturer API dengan Fiber + UUID v4 PK; ToDoList API dengan Gin + Clean Architecture 4-layer, GORM hooks, dan DB connection pool teroptimasi.",
          impact: ["Penguasaan Go backend dari dasar hingga Clean Architecture", "Interface-based design yang dapat ditransfer ke produksi", "Connection pooling eksplisit: 10 idle / 100 max / 1-hour lifetime"],
          stack: ["Go", "Gin", "Fiber", "PostgreSQL", "GORM", "Clean Architecture"],
          highlight: false,
        },
      ],
    },
    experience: {
      title: "Pengalaman Profesional",
      sub: "Dari magang hingga juara kompetisi — setiap peran mempertajam kemampuan saya untuk deliver di bawah tekanan dan bertanggung jawab penuh atas hasil.",
      items: [
        {
          role: "Fullstack Developer Intern",
          company: "PT Sinergi Informatika Semen Indonesia (PT SISI)",
          period: "Okt 2025 – Apr 2026",
          type: "Magang",
          points: ["Integrasi frontend React.js & Vue.js untuk 2 platform e-procurement BUMN", "100% persetujuan fungsional di 20+ deliverable prioritas tinggi", "Zero sprint rollback di 5 siklus Agile sprint", "Proaktif eliminasi celah keamanan dokumen di luar cakupan tugas"],
        },
        {
          role: "Sole Fullstack Developer",
          company: "PT Sucofindo — HackIn Fest 2025",
          period: "Jul – Okt 2025",
          type: "Kompetisi",
          points: ["Sole developer platform SAKTI dari nol hingga produksi dalam 3 bulan", "Juara 1 — Kategori Inovasi Layanan", "Zero critical defects pada live demo kompetisi nasional", "50+ REST API endpoints dengan RBAC dan audit trail"],
        },
        {
          role: "Backend Developer Intern (Kerja Praktik)",
          company: "PT Praisindo Teknologi",
          period: "2024",
          type: "Magang",
          points: ["Mengembangkan Go microservices dengan Clean Architecture 4-layer", "Implementasi interface-based dependency injection dengan GORM", "Zero blocker defects dalam QA review", "Menetapkan pola connection pooling siap produksi"],
        },
      ],
    },
    contact: {
      title: "Mari Bangun Sesuatu Bersama",
      sub: "Saya sedang terbuka untuk peluang fullstack developer di mana saya dapat berkontribusi pada produk bermakna dan berkembang bersama tim yang ambisius. Jika Anda mencari seseorang yang peduli pada arsitektur sekaligus pengiriman — mari bicara.",
      email: "salsabilarafifahh@gmail.com",
      linkedin: "linkedin.com/in/salsabila-rh",
      github: "github.com/salsabilarh",
      whatsapp: "+62 812-4583-2984",
    },
    footer: "Dibangun dengan Next.js · TypeScript · Tailwind CSS · Framer Motion",
  },
};

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}

function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, visible] = useScrollAnimation();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function Navbar() {
  const { lang, setLang } = useContext(LangContext);
  const { dark, setDark } = useContext(ThemeContext);
  const t = content[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? (dark ? "rgba(10,15,28,0.92)" : "rgba(248,250,252,0.92)") : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? `1px solid ${dark ? "rgba(59,130,246,0.15)" : "rgba(30,58,95,0.1)"}` : "none",
      transition: "all 0.3s ease",
      padding: "0 2rem",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontWeight: 700,
          fontSize: 18,
          color: "#3b82f6",
          letterSpacing: "-0.5px",
        }}>
          &lt;SRH /&gt;
        </span>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav">
          {([["projects", "projects"], ["skills", "skills"], ["experience", "experience"], ["contact", "contact"]] as const).map(([key, id]) => (
            <button key={key} onClick={() => scroll(id)} style={{
              background: "none", border: "none", cursor: "pointer",
              color: dark ? "#94a3b8" : "#475569",
              fontFamily: "'DM Mono', monospace",
              fontSize: 13,
              letterSpacing: "0.5px",
              transition: "color 0.2s",
              padding: "4px 0",
            }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#3b82f6"}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = dark ? "#94a3b8" : "#475569"}
            >
              {t[key as keyof typeof t]}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => setLang(lang === "en" ? "id" : "en")} style={{
            background: dark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.08)",
            border: "1px solid rgba(59,130,246,0.3)",
            borderRadius: 6,
            color: "#3b82f6",
            cursor: "pointer",
            padding: "4px 10px",
            fontFamily: "'DM Mono', monospace",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 1,
            transition: "all 0.2s",
          }}>
            {lang === "en" ? "ID" : "EN"}
          </button>
          <button onClick={() => setDark(!dark)} style={{
            background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
            border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
            borderRadius: 6,
            cursor: "pointer",
            padding: "5px 8px",
            fontSize: 14,
            transition: "all 0.2s",
          }}>
            {dark ? "☀️" : "🌙"}
          </button>
          <button onClick={() => scroll("contact")} style={{
            background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
            border: "none",
            borderRadius: 8,
            color: "#fff",
            cursor: "pointer",
            padding: "8px 18px",
            fontFamily: "'DM Mono', monospace",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 0.5,
            boxShadow: "0 2px 12px rgba(59,130,246,0.35)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = "translateY(-1px)"; (e.target as HTMLElement).style.boxShadow = "0 4px 20px rgba(59,130,246,0.5)"; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = "translateY(0)"; (e.target as HTMLElement).style.boxShadow = "0 2px 12px rgba(59,130,246,0.35)"; }}
          >
            {t.hire}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Terminal() {
  const commands = [
    "$ npm test -- --coverage",
    "  ✓ 53 test files passed",
    "  Coverage: 100% | Statements | Branches | Functions | Lines",
    "$ git push origin main",
    "  → GitHub Actions triggered",
    "  ✓ Build passed · ✓ Tests passed · ✓ Deploy success",
    "$ curl https://api.sakti.app/services",
    '  { "total": 142, "status": "operational" }',
  ];
  const [lines, setLines] = useState<string[]>([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx >= commands.length) {
      const t = setTimeout(() => { setLines([]); setIdx(0); }, 2000);
      return () => clearTimeout(t);
    }
    const delay = idx % 3 === 0 ? 700 : 400;
    const t = setTimeout(() => {
      setLines(p => [...p, commands[idx]]);
      setIdx(i => i + 1);
    }, delay);
    return () => clearTimeout(t);
  }, [idx]);

  const { dark } = useContext(ThemeContext);

  return (
    <div style={{
      background: dark ? "#0d1117" : "#1a1a2e",
      borderRadius: 12,
      padding: "16px 20px",
      fontFamily: "'DM Mono', monospace",
      fontSize: 12,
      lineHeight: 1.7,
      border: "1px solid rgba(59,130,246,0.2)",
      boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
      minHeight: 180,
      overflow: "hidden",
    }}>
      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        {["#ef4444","#f59e0b","#10b981"].map(c => (
          <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
        ))}
        <span style={{ color: "#4b5563", marginLeft: 8, fontSize: 11 }}>terminal</span>
      </div>
      {lines.map((line, i) => (
        <div key={i} style={{
          color: line.startsWith("$") ? "#63b3ed" : line.includes("✓") ? "#10b981" : line.includes("→") ? "#f59e0b" : "#94a3b8",
          animation: "fadeInLine 0.3s ease",
        }}>
          {line}
        </div>
      ))}
      <span style={{ color: "#3b82f6", animation: "blink 1s infinite" }}>█</span>
    </div>
  );
}

function Hero() {
  const { lang } = useContext(LangContext);
  const { dark } = useContext(ThemeContext);
  const t = content[lang].hero;

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "80px 2rem 60px",
      background: dark
        ? "radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(99,179,237,0.05) 0%, transparent 50%)"
        : "radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.05) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(30,58,95,0.03) 0%, transparent 50%)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        <div>
          <div style={{
            display: "inline-block",
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.25)",
            borderRadius: 100,
            padding: "6px 16px",
            marginBottom: 24,
            color: "#3b82f6",
            fontFamily: "'DM Mono', monospace",
            fontSize: 12,
            letterSpacing: 1,
            opacity: 0,
            animation: "fadeSlideIn 0.6s ease 0.2s forwards",
          }}>
            ⚡ {lang === "en" ? "Available for opportunities" : "Terbuka untuk peluang baru"}
          </div>

          <div style={{ opacity: 0, animation: "fadeSlideIn 0.6s ease 0.3s forwards" }}>
            <p style={{
              color: dark ? "#94a3b8" : "#64748b",
              fontFamily: "'DM Mono', monospace",
              fontSize: 14,
              marginBottom: 8,
              letterSpacing: 1,
            }}>
              {t.greeting}
            </p>
            <h1 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 8,
              background: dark ? "linear-gradient(135deg, #e2e8f0 0%, #93c5fd 100%)" : "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              {t.name}
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 40, height: 2, background: "#3b82f6" }} />
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 14,
                fontWeight: 600,
                color: "#3b82f6",
                letterSpacing: 2,
                textTransform: "uppercase",
              }}>
                {t.role}
              </span>
            </div>
          </div>

          <div style={{ opacity: 0, animation: "fadeSlideIn 0.6s ease 0.45s forwards" }}>
            <p style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: dark ? "#cbd5e1" : "#334155",
              marginBottom: 12,
              fontWeight: 500,
            }}>
              {t.tagline}
            </p>
            <p style={{
              fontSize: 14,
              lineHeight: 1.8,
              color: dark ? "#94a3b8" : "#64748b",
              marginBottom: 32,
            }}>
              {t.sub}
            </p>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", opacity: 0, animation: "fadeSlideIn 0.6s ease 0.6s forwards" }}>
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} style={{
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              border: "none", borderRadius: 10, color: "#fff",
              cursor: "pointer", padding: "12px 24px",
              fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 600,
              boxShadow: "0 4px 20px rgba(59,130,246,0.4)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = "translateY(-2px)"; (e.target as HTMLElement).style.boxShadow = "0 8px 30px rgba(59,130,246,0.5)"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = "translateY(0)"; (e.target as HTMLElement).style.boxShadow = "0 4px 20px rgba(59,130,246,0.4)"; }}
            >
              {t.cta1} →
            </button>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{
              background: "transparent",
              border: `1px solid ${dark ? "rgba(255,255,255,0.15)" : "rgba(30,58,95,0.2)"}`,
              borderRadius: 10,
              color: dark ? "#e2e8f0" : "#1e293b",
              cursor: "pointer", padding: "12px 24px",
              fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 600,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.borderColor = "#3b82f6"; (e.target as HTMLElement).style.color = "#3b82f6"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.borderColor = dark ? "rgba(255,255,255,0.15)" : "rgba(30,58,95,0.2)"; (e.target as HTMLElement).style.color = dark ? "#e2e8f0" : "#1e293b"; }}
            >
              {t.cta3}
            </button>
          </div>

          <div style={{ display: "flex", gap: "2rem", marginTop: 40, opacity: 0, animation: "fadeSlideIn 0.6s ease 0.75s forwards" }}>
            {t.stats.map((s, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#3b82f6",
                  lineHeight: 1,
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  color: dark ? "#64748b" : "#94a3b8",
                  letterSpacing: 0.5,
                  marginTop: 4,
                  textTransform: "uppercase",
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ opacity: 0, animation: "fadeSlideIn 0.6s ease 0.5s forwards" }}>
          <Terminal />
          <div style={{
            marginTop: 16,
            padding: "12px 16px",
            background: dark ? "rgba(16,185,129,0.05)" : "rgba(16,185,129,0.04)",
            border: "1px solid rgba(16,185,129,0.2)",
            borderRadius: 8,
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: "#10b981",
            letterSpacing: 0.5,
          }}>
            🏆 Juara 1 HackIn Fest 2025 · PT Sucofindo · Kategori Inovasi Layanan
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const { lang } = useContext(LangContext);
  const { dark } = useContext(ThemeContext);
  const t = content[lang].skills;

  return (
    <section id="skills" style={{
      padding: "100px 2rem",
      background: dark ? "rgba(15,23,42,0.5)" : "rgba(248,250,252,0.8)",
      borderTop: `1px solid ${dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"}`,
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#3b82f6", letterSpacing: 2, textTransform: "uppercase" }}>
              // tech stack
            </span>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: dark ? "#e2e8f0" : "#0f172a",
              marginTop: 8, marginBottom: 16,
            }}>
              {t.title}
            </h2>
            <p style={{ color: dark ? "#94a3b8" : "#64748b", maxWidth: 560, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>
              {t.sub}
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {t.categories.map((cat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{
                background: dark ? "rgba(255,255,255,0.03)" : "#fff",
                border: `1px solid ${dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
                borderRadius: 16,
                padding: "24px",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = cat.color + "40";
                e.currentTarget.style.background = dark ? `${cat.color}08` : `${cat.color}05`;
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 12px 40px ${cat.color}15`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
                e.currentTarget.style.background = dark ? "rgba(255,255,255,0.03)" : "#fff";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              >
                <div style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: cat.color,
                  display: "inline-block",
                  marginBottom: 12,
                  boxShadow: `0 0 8px ${cat.color}60`,
                }} />
                <h3 style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11,
                  fontWeight: 600,
                  color: cat.color,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}>
                  {cat.name}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {cat.items.map((item, j) => (
                    <span key={j} style={{
                      background: dark ? `${cat.color}12` : `${cat.color}10`,
                      border: `1px solid ${cat.color}25`,
                      borderRadius: 6,
                      padding: "4px 10px",
                      fontSize: 12,
                      fontFamily: "'DM Mono', monospace",
                      color: dark ? "#cbd5e1" : "#334155",
                      transition: "all 0.2s",
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Project {
  title: string;
  badge: string;
  type: string[];
  period: string;
  desc: string;
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
  live?: string;
  highlight: boolean;
}

function ProjectCard({ project, index, filterKey }: { project: Project; index: number; filterKey: number }) {
  const { dark } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  const [expanded, setExpanded] = useState(false);

  const typeMap = { "Backend API": "Backend API", "Fullstack": "Fullstack", "Enterprise": "Enterprise", "Competition": "Kompetisi", "Kompetisi": "Kompetisi" };

  const typeColors: Record<string, string> = {
    "Backend API": "#3b82f6",
    "Fullstack": "#8b5cf6",
    "Enterprise": "#10b981",
    "Competition": "#f59e0b",
    "Kompetisi": "#f59e0b",
  };

  return (
    <FadeIn delay={index * 0.08}>
      <div style={{
        background: dark ? "rgba(255,255,255,0.03)" : "#fff",
        border: project.highlight
          ? "1.5px solid rgba(59,130,246,0.4)"
          : `1px solid ${dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
        borderRadius: 18,
        padding: 28,
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = project.highlight
          ? "0 20px 60px rgba(59,130,246,0.2)"
          : `0 12px 40px ${dark ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"}`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
      >
        {project.highlight && (
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 2,
            background: "linear-gradient(90deg, #3b82f6, #63b3ed, #3b82f6)",
          }} />
        )}

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, gap: 12 }}>
          <div>
            <h3 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 18,
              fontWeight: 700,
              color: dark ? "#e2e8f0" : "#0f172a",
              marginBottom: 4,
            }}>
              {project.title}
            </h3>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: dark ? "#64748b" : "#94a3b8" }}>
              {project.period}
            </div>
          </div>
          <span style={{
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: 100,
            padding: "4px 10px",
            fontSize: 11,
            fontFamily: "'DM Mono', monospace",
            color: "#3b82f6",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}>
            {project.badge}
          </span>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
          {project.type.map((t, i) => (
            <span key={i} style={{
              background: `${typeColors[t] || "#3b82f6"}15`,
              border: `1px solid ${typeColors[t] || "#3b82f6"}30`,
              borderRadius: 4,
              padding: "2px 8px",
              fontSize: 10,
              fontFamily: "'DM Mono', monospace",
              color: typeColors[t] || "#3b82f6",
              letterSpacing: 0.5,
              textTransform: "uppercase",
            }}>
              {t}
            </span>
          ))}
        </div>

        <p style={{ fontSize: 14, color: dark ? "#94a3b8" : "#64748b", lineHeight: 1.75, marginBottom: 16 }}>
          {project.desc}
        </p>

        <div style={{
          maxHeight: expanded ? 1000 : 0,
          overflow: "hidden",
          transition: "max-height 0.5s ease",
        }}>
          <div style={{ borderTop: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`, paddingTop: 16, marginBottom: 16 }}>
            <div style={{ marginBottom: 12 }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#ef4444", letterSpacing: 1, textTransform: "uppercase" }}>
                // problem
              </span>
              <p style={{ fontSize: 13, color: dark ? "#94a3b8" : "#64748b", lineHeight: 1.7, marginTop: 6 }}>
                {project.problem}
              </p>
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#3b82f6", letterSpacing: 1, textTransform: "uppercase" }}>
                // solution
              </span>
              <p style={{ fontSize: 13, color: dark ? "#94a3b8" : "#64748b", lineHeight: 1.7, marginTop: 6 }}>
                {project.solution}
              </p>
            </div>
            <div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#10b981", letterSpacing: 1, textTransform: "uppercase" }}>
                // impact
              </span>
              <ul style={{ marginTop: 8, paddingLeft: 0, listStyle: "none" }}>
                {project.impact.map((item, i) => (
                  <li key={i} style={{
                    fontSize: 13,
                    color: dark ? "#94a3b8" : "#64748b",
                    lineHeight: 1.7,
                    paddingLeft: 16,
                    position: "relative",
                    marginBottom: 4,
                  }}>
                    <span style={{ position: "absolute", left: 0, color: "#10b981" }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
          {project.stack.map((s, i) => (
            <span key={i} style={{
              background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
              border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}`,
              borderRadius: 4,
              padding: "3px 8px",
              fontSize: 11,
              fontFamily: "'DM Mono', monospace",
              color: dark ? "#64748b" : "#94a3b8",
            }}>
              {s}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setExpanded(!expanded)} style={{
            background: "transparent",
            border: `1px solid ${dark ? "rgba(59,130,246,0.3)" : "rgba(59,130,246,0.3)"}`,
            borderRadius: 8,
            color: "#3b82f6",
            cursor: "pointer",
            padding: "7px 14px",
            fontSize: 12,
            fontFamily: "'DM Mono', monospace",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "rgba(59,130,246,0.1)"; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "transparent"; }}
          >
            {expanded ? (lang === "en" ? "Show Less ↑" : "Tutup ↑") : (lang === "en" ? "Details ↓" : "Detail ↓")}
          </button>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: 8,
              color: "#10b981",
              cursor: "pointer",
              padding: "7px 14px",
              fontSize: 12,
              fontFamily: "'DM Mono', monospace",
              textDecoration: "none",
              transition: "all 0.2s",
              display: "inline-block",
            }}>
              {lang === "en" ? "Live Demo ↗" : "Demo Langsung ↗"}
            </a>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

function Projects() {
  const { lang } = useContext(LangContext);
  const { dark } = useContext(ThemeContext);
  const t = content[lang].projects;
  const [activeFilter, setActiveFilter] = useState(0);

  const filterMap = { en: ["All", "Backend API", "Fullstack", "Enterprise", "Competition"], id: ["Semua", "Backend API", "Fullstack", "Enterprise", "Kompetisi"] };
  const typeFilter = filterMap[lang][activeFilter];

  const filtered = t.items.filter(p => {
    if (activeFilter === 0) return true;
    return p.type.includes(typeFilter);
  });

  return (
    <section id="projects" style={{
      padding: "100px 2rem",
      background: dark ? "transparent" : "#fff",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#3b82f6", letterSpacing: 2, textTransform: "uppercase" }}>
              // portfolio
            </span>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: dark ? "#e2e8f0" : "#0f172a",
              marginTop: 8, marginBottom: 16,
            }}>
              {t.title}
            </h2>
            <p style={{ color: dark ? "#94a3b8" : "#64748b", maxWidth: 540, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>
              {t.sub}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
            {t.filters.map((f, i) => (
              <button key={i} onClick={() => setActiveFilter(i)} style={{
                background: activeFilter === i ? "linear-gradient(135deg, #3b82f6, #1d4ed8)" : (dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"),
                border: activeFilter === i ? "none" : `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                borderRadius: 100,
                color: activeFilter === i ? "#fff" : (dark ? "#94a3b8" : "#64748b"),
                cursor: "pointer",
                padding: "8px 18px",
                fontSize: 13,
                fontFamily: "'DM Mono', monospace",
                transition: "all 0.2s",
                boxShadow: activeFilter === i ? "0 4px 15px rgba(59,130,246,0.3)" : "none",
              }}>
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 24 }}>
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} filterKey={activeFilter} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const { lang } = useContext(LangContext);
  const { dark } = useContext(ThemeContext);
  const t = content[lang].experience;

  const typeColors: Record<string, string> = { Internship: "#3b82f6", Magang: "#3b82f6", Competition: "#f59e0b", Kompetisi: "#f59e0b" };

  return (
    <section id="experience" style={{
      padding: "100px 2rem",
      background: dark ? "rgba(15,23,42,0.5)" : "rgba(248,250,252,0.8)",
      borderTop: `1px solid ${dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"}`,
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#3b82f6", letterSpacing: 2, textTransform: "uppercase" }}>
              // career
            </span>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: dark ? "#e2e8f0" : "#0f172a",
              marginTop: 8, marginBottom: 16,
            }}>
              {t.title}
            </h2>
            <p style={{ color: dark ? "#94a3b8" : "#64748b", maxWidth: 520, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>
              {t.sub}
            </p>
          </div>
        </FadeIn>

        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", left: 20, top: 0, bottom: 0, width: 1,
            background: dark ? "rgba(59,130,246,0.2)" : "rgba(59,130,246,0.15)",
          }} />

          {t.items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div style={{ display: "flex", gap: 32, marginBottom: 40, position: "relative" }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
                  background: dark ? "#0f172a" : "#fff",
                  border: `2px solid ${typeColors[item.type] || "#3b82f6"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14,
                  boxShadow: `0 0 16px ${typeColors[item.type] || "#3b82f6"}30`,
                  zIndex: 1,
                }}>
                  {item.type === "Competition" || item.type === "Kompetisi" ? "🏆" : "💼"}
                </div>
                <div style={{
                  flex: 1,
                  background: dark ? "rgba(255,255,255,0.03)" : "#fff",
                  border: `1px solid ${dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
                  borderRadius: 16,
                  padding: "24px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${typeColors[item.type] || "#3b82f6"}40`;
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                    <div>
                      <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 17, fontWeight: 700, color: dark ? "#e2e8f0" : "#0f172a", marginBottom: 4 }}>
                        {item.role}
                      </h3>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#3b82f6" }}>
                        {item.company}
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                      <span style={{
                        background: `${typeColors[item.type] || "#3b82f6"}15`,
                        border: `1px solid ${typeColors[item.type] || "#3b82f6"}30`,
                        borderRadius: 100,
                        padding: "2px 10px",
                        fontSize: 10,
                        fontFamily: "'DM Mono', monospace",
                        color: typeColors[item.type] || "#3b82f6",
                        letterSpacing: 0.5,
                        textTransform: "uppercase",
                      }}>
                        {item.type}
                      </span>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: dark ? "#64748b" : "#94a3b8" }}>
                        {item.period}
                      </span>
                    </div>
                  </div>
                  <ul style={{ paddingLeft: 0, listStyle: "none", marginTop: 12 }}>
                    {item.points.map((pt, j) => (
                      <li key={j} style={{
                        fontSize: 13,
                        color: dark ? "#94a3b8" : "#64748b",
                        lineHeight: 1.7,
                        paddingLeft: 18,
                        position: "relative",
                        marginBottom: 4,
                      }}>
                        <span style={{ position: "absolute", left: 0, color: "#3b82f6", fontWeight: 700 }}>›</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(99,179,237,0.05))",
            border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: 16,
            padding: 24,
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#3b82f6", letterSpacing: 1, marginBottom: 8 }}>
                // EDUCATION
              </div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 700, color: dark ? "#e2e8f0" : "#0f172a", marginBottom: 4 }}>
                S1 Teknik Komputer
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: dark ? "#94a3b8" : "#64748b" }}>
                Universitas Diponegoro
              </div>
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 800, color: "#10b981" }}>3.82</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: dark ? "#64748b" : "#94a3b8", textTransform: "uppercase", letterSpacing: 0.5 }}>GPA</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 800, color: "#3b82f6" }}>566</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: dark ? "#64748b" : "#94a3b8", textTransform: "uppercase", letterSpacing: 0.5 }}>TOEFL</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Contact() {
  const { lang } = useContext(LangContext);
  const { dark } = useContext(ThemeContext);
  const t = content[lang].contact;
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const channels = [
    { icon: "✉️", label: "Email", value: t.email, key: "email", link: `mailto:${t.email}` },
    { icon: "💼", label: "LinkedIn", value: t.linkedin, key: "linkedin", link: `https://${t.linkedin}` },
    { icon: "🐙", label: "GitHub", value: t.github, key: "github", link: `https://${t.github}` },
    { icon: "💬", label: "WhatsApp", value: t.whatsapp, key: "wa", link: `https://wa.me/6281245832984` },
  ];

  return (
    <section id="contact" style={{
      padding: "100px 2rem",
      background: dark ? "transparent" : "#fff",
      borderTop: `1px solid ${dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"}`,
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#3b82f6", letterSpacing: 2, textTransform: "uppercase" }}>
            // contact
          </span>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
            fontWeight: 800,
            color: dark ? "#e2e8f0" : "#0f172a",
            marginTop: 8, marginBottom: 20,
          }}>
            {t.title}
          </h2>
          <p style={{ color: dark ? "#94a3b8" : "#64748b", maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.8, fontSize: 15 }}>
            {t.sub}
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 40 }}>
          {channels.map((ch, i) => (
            <FadeIn key={ch.key} delay={i * 0.1}>
              <div style={{
                background: dark ? "rgba(255,255,255,0.03)" : "#fff",
                border: `1px solid ${dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
                borderRadius: 16,
                padding: "20px 16px",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(59,130,246,0.12)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onClick={() => copy(ch.value, ch.key)}
              >
                <div style={{ fontSize: 24, marginBottom: 8 }}>{ch.icon}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#3b82f6", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>
                  {ch.label}
                </div>
                <div style={{ fontSize: 12, color: dark ? "#94a3b8" : "#64748b", wordBreak: "break-all", lineHeight: 1.4 }}>
                  {ch.value}
                </div>
                {copied === ch.key && (
                  <div style={{
                    position: "absolute", top: 8, right: 8,
                    background: "#10b981",
                    borderRadius: 4,
                    padding: "2px 6px",
                    fontSize: 10,
                    color: "#fff",
                    fontFamily: "'DM Mono', monospace",
                  }}>
                    ✓ copied
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href={`mailto:${t.email}`} style={{
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              border: "none", borderRadius: 12, color: "#fff",
              cursor: "pointer", padding: "14px 32px",
              fontFamily: "'Sora', sans-serif", fontSize: 15, fontWeight: 600,
              boxShadow: "0 4px 20px rgba(59,130,246,0.4)",
              transition: "all 0.2s",
              textDecoration: "none",
              display: "inline-block",
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = "translateY(-2px)"; (e.target as HTMLElement).style.boxShadow = "0 8px 30px rgba(59,130,246,0.5)"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = "translateY(0)"; (e.target as HTMLElement).style.boxShadow = "0 4px 20px rgba(59,130,246,0.4)"; }}
            >
              {lang === "en" ? "Send Email →" : "Kirim Email →"}
            </a>
            <a href={`https://${t.linkedin}`} target="_blank" rel="noopener noreferrer" style={{
              background: "transparent",
              border: "1px solid rgba(59,130,246,0.3)", borderRadius: 12, color: "#3b82f6",
              cursor: "pointer", padding: "14px 32px",
              fontFamily: "'Sora', sans-serif", fontSize: 15, fontWeight: 600,
              transition: "all 0.2s",
              textDecoration: "none",
              display: "inline-block",
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "rgba(59,130,246,0.08)"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "transparent"; }}
            >
              LinkedIn ↗
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  const { lang } = useContext(LangContext);
  const { dark } = useContext(ThemeContext);
  const t = content[lang];

  return (
    <footer style={{
      padding: "32px 2rem",
      borderTop: `1px solid ${dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`,
      background: dark ? "rgba(10,15,28,0.8)" : "rgba(248,250,252,0.8)",
      textAlign: "center",
    }}>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: dark ? "#475569" : "#94a3b8", letterSpacing: 0.5 }}>
        © 2025 Salsabila Rafifah Handifa · {t.footer}
      </div>
    </footer>
  );
}

function ScrollProgress() {
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement;
      const pct = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setProg(pct * 100);
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, zIndex: 200,
      height: 2,
      width: `${prog}%`,
      background: "linear-gradient(90deg, #3b82f6, #63b3ed)",
      transition: "width 0.1s linear",
    }} />
  );
}

export default function App() {
  const [lang, setLang] = useState<"en" | "id">("en");
  const [dark, setDark] = useState(true);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <ThemeContext.Provider value={{ dark, setDark }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: 'Sora', sans-serif; }
          @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInLine {
            from { opacity: 0; transform: translateX(-4px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          ::-webkit-scrollbar { width: 4px; }
          ::-webkit-scrollbar-track { background: transparent; }
          ::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.4); border-radius: 2px; }
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            section > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
        <div style={{
          background: dark ? "#0a0f1c" : "#f8fafc",
          color: dark ? "#e2e8f0" : "#1e293b",
          minHeight: "100vh",
          transition: "background 0.3s ease, color 0.3s ease",
        }}>
          <ScrollProgress />
          <Navbar />
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </LangContext.Provider>
  );
}