// src/data/experience.ts
import type { Experience } from './index';

export const experiences: Experience[] = [
  {
    id: 'pt-sisi',
    type: 'intern',
    roleEn: 'Fullstack Developer',
    roleId: 'Fullstack Developer',
    typeBadgeEn: 'Internship & Freelance',
    typeBadgeId: 'Magang & Freelance',
    company: 'PT Sinergi Informatika Semen Indonesia (PT SISI) — Jakarta Selatan',
    periodEn: 'Oct 2025 – Apr 2026',
    periodId: 'Okt 2025 – Apr 2026',
    achievementsEn: [
      'Accomplished 100% QA approval across 20+ high-priority deliverables on 2 BUMN e-Procurement platforms, as measured by zero re-work requests and zero sprint rollback across 5 Agile cycles.',
      'Proactively eliminated a critical document access security gap at PT LEN Industri — achieving zero unauthorized file access post-logout — by implementing API + Blob session-scoped delivery beyond task scope.',
      'Integrated Firebase Cloud Messaging (FCM) push notifications for PT Dahana\'s mobile platform — ensuring real-time delivery to all authorized users at every critical action point in the VMS and TMS modules.',
    ],
    achievementsId: [
      'Mencapai 100% persetujuan QA di 20+ deliverable prioritas tinggi pada 2 platform e-Procurement BUMN, diukur dengan nol permintaan pengerjaan ulang dan nol sprint rollback di 5 siklus Agile.',
      'Secara proaktif mengeliminasi celah keamanan akses dokumen kritis di PT LEN Industri — mencapai nol akses file tidak terotorisasi pasca-logout — mengimplementasikan pengiriman dokumen Blob session-scoped di luar cakupan tugas.',
      'Mengintegrasikan push notification Firebase Cloud Messaging (FCM) untuk platform mobile PT Dahana — memastikan pengiriman real-time ke seluruh pengguna berwenang di setiap titik aksi kritis modul VMS dan TMS.',
    ],
    stack: ['React.js', 'Vue.js', 'FCM/Firebase', 'Postman', 'Azure DevOps', 'Agile/Scrum'],
  },
  {
    id: 'hackin-fest',
    type: 'competition',
    roleEn: 'Sole Fullstack Developer',
    roleId: 'Sole Fullstack Developer',
    typeBadgeEn: '🏆 National Competition',
    typeBadgeId: '🏆 Kompetisi Nasional',
    company: 'PT Sucofindo — HackIn Fest 2025',
    periodEn: 'Jul – Oct 2025',
    periodId: 'Jul – Okt 2025',
    achievementsEn: [
      'Accomplished Juara 1 (1st Place) — Kategori Inovasi Layanan, as measured by zero critical defects in live demo before competition judges, by architecting and delivering the entire SAKTI platform as the sole external technical developer within a 3-month competition window.',
      'Consolidated 142 service records and 25 business unit datasets into one real-time searchable platform, integrating an AI chatbot (Botpress) for self-service access — the decisive factor cited by competition judges.',
      'Built a multi-layer authorization system with 5 combinable RBAC middleware strategies and a signed URL audit trail (60s expiry per request) — ensuring 100% accountability for every sensitive marketing kit download.',
    ],
    achievementsId: [
      'Meraih Juara 1 — Kategori Inovasi Layanan, diukur dengan nol defect kritis saat live demo di hadapan juri, dengan merancang dan mengantarkan seluruh platform SAKTI sebagai developer teknis eksternal tunggal dalam 3 bulan.',
      'Mengonsolidasikan 142 catatan layanan dan 25 dataset unit bisnis ke dalam satu platform real-time yang bisa dicari, mengintegrasikan AI chatbot (Botpress) — faktor penentu yang dikutip oleh juri kompetisi.',
      'Membangun sistem otorisasi berlapis dengan 5 strategi middleware RBAC yang dapat dikombinasikan dan audit trail signed URL (kedaluwarsa 60 detik per request).',
    ],
    stack: ['Node.js', 'Express.js', 'React.js', 'MySQL/Sequelize', 'JWT/Argon2/RBAC', 'Cloudinary CDN', 'Botpress AI'],
  },
  {
    id: 'pt-praisindo',
    type: 'intern',
    roleEn: 'Backend Developer',
    roleId: 'Backend Developer',
    typeBadgeEn: 'Internship',
    typeBadgeId: 'Kerja Praktik',
    company: 'PT Praisindo Teknologi — Jakarta Selatan',
    periodEn: 'Jan – Apr 2024',
    periodId: 'Jan – Apr 2024',
    achievementsEn: [
      'Delivered 2 production Go microservices (AML Watchlist Approval & Customer Risk Profile Detail) into the company\'s fintech compliance pipeline, achieving zero blocker defects across 2 QA sprint handoffs.',
      'Authored API contracts and integration guides adopted as the primary reference by 3 cross-functional teams — achieving zero clarification requests across 2 sprints in a 10+ person team tracked via Azure DevOps.',
    ],
    achievementsId: [
      'Mengantarkan 2 microservice Go produksi (AML Watchlist Approval & Customer Risk Profile Detail) ke dalam pipeline kepatuhan fintech, mencapai nol defect blocker di 2 siklus QA sprint handoff.',
      'Menyusun kontrak API dan panduan integrasi yang diadopsi sebagai referensi utama oleh 3 tim lintas fungsi — mencapai nol permintaan klarifikasi di 2 sprint dalam tim 10+ orang yang dipantau via Azure DevOps.',
    ],
    stack: ['Golang', 'Gin / Fiber', 'MongoDB', 'PostgreSQL/GORM', 'Azure DevOps', 'Postman'],
  },
];