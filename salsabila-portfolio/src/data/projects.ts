// src/data/projects.ts
// ═══════════════════════════════════════════════════
// CARA MENAMBAH PROJECT BARU:
// 1. Copy salah satu object di bawah
// 2. Ganti semua field-nya
// 3. Selesai — ProjectCard.tsx merender otomatis
//
// Tidak perlu sentuh komponen atau CSS apapun!
// ═══════════════════════════════════════════════════

import type { Project } from './index';

export const projects: Project[] = [
  {
    id: 'sakti-platform',
    category: ['fullstack', 'competition', 'enterprise'],
    award: '🏆 Juara 1 · HackIn Fest 2025',
    titleEn: 'SAKTI Platform',
    titleId: 'Platform SAKTI',
    orgEn: 'PT Sucofindo (BUMN) · Jul – Oct 2025 · Sole Fullstack Developer',
    orgId: 'PT Sucofindo (BUMN) · Jul – Okt 2025 · Fullstack Developer Tunggal',
    descEn: 'Delivered a full-stack service catalog and marketing kit platform from zero to production-ready in 3 months as the sole developer — consolidating 142 inspection services across 25+ BUMN units, with AI chatbot integration and 60-second signed URL audit trail.',
    descId: 'Mengantarkan platform katalog layanan dan manajemen marketing kit dari nol hingga siap produksi dalam 3 bulan sebagai developer tunggal — mengonsolidasikan 142 layanan inspeksi di 25+ unit BUMN, dengan integrasi AI chatbot dan audit trail signed URL 60 detik.',
    highlights: ['✓ Zero Critical Defects', '✓ 50+ API Endpoints', '✓ 3 Months Delivery'],
    stack: ['Node.js', 'Express.js', 'React.js', 'MySQL', 'Sequelize ORM', 'JWT/Argon2', 'Cloudinary CDN', 'Tailwind CSS', 'Framer Motion', 'Botpress AI'],
    github: 'https://github.com/salsabilarh',
    live: 'https://sakti-drab.vercel.app',
    psi: {
      problemEn: "PT Sucofindo's 142+ inspection services were siloed across 25+ business units with no standardized, searchable catalog. Marketing materials had no audit trail, creating accountability gaps for sensitive BUMN documents.",
      problemId: '142+ layanan inspeksi PT Sucofindo tersebar di 25+ unit bisnis tanpa katalog terpusat yang terstandarisasi. Material marketing tidak memiliki audit trail, menciptakan celah akuntabilitas untuk dokumen sensitif BUMN.',
      solutionEn: 'Full-stack platform with 5-strategy combinable RBAC middleware, signed URLs expiring in 60 seconds, hierarchical catalog (Portfolio → Sub-Portfolio → Sector), 16 versioned migrations, and real-time admin dashboard.',
      solutionId: 'Platform fullstack dengan 5 strategi middleware RBAC yang dapat dikombinasikan, signed URL kedaluwarsa 60 detik, katalog hierarkis, 16 migration terversi, dan dashboard admin real-time.',
      impactEn: 'Accomplished Juara 1 Kategori Inovasi Layanan at HackIn Fest 2025, as measured by zero critical defects in live demo before judges, by architecting the entire system as the sole external developer within a 3-month window.',
      impactId: 'Meraih Juara 1 Kategori Inovasi Layanan di HackIn Fest 2025, diukur dengan nol defect kritis saat live demo, dengan merancang seluruh sistem sebagai developer tunggal dalam 3 bulan.',
    },
  },
  {
    id: 'forum-api',
    category: ['backend'],
    award: '⭐ Perfect Score 5/5 · Dicoding',
    titleEn: 'Forum API',
    titleId: 'Forum API',
    orgEn: 'Dicoding Indonesia · Jan 2026 · Back-End Developer Expert',
    orgId: 'Dicoding Indonesia · Jan 2026 · Back-End Developer Expert',
    descEn: 'Production-grade discussion platform API enforcing Clean Architecture 4-layer with strict dependency inversion, 100% Jest coverage across 53 test files, automated CI/CD pipeline, Docker + NGINX containerization, and N+1 query elimination by design.',
    descId: 'API platform diskusi production-grade dengan Clean Architecture 4-layer dan dependency inversion ketat, 100% Jest coverage di 53 file pengujian, pipeline CI/CD otomatis, containerization Docker + NGINX, dan eliminasi N+1 sejak desain.',
    highlights: ['✓ 100% Test Coverage', '✓ 53 Test Files', '✓ Zero Manual Deploy Steps'],
    stack: ['Node.js', 'Hapi.js', 'PostgreSQL', 'Jest', 'Docker', 'NGINX', 'GitHub Actions', 'Clean Architecture'],
    github: 'https://github.com/salsabilarh',
    live: '',
    psi: {
      problemEn: 'Build a forum API that is fully testable without a database or HTTP server, independently deployable, and architecturally correct by design — not by convention.',
      problemId: 'Membangun API forum yang sepenuhnya dapat diuji tanpa database atau HTTP server, dapat di-deploy secara independen, dan secara arsitektur benar sejak desain.',
      solutionEn: 'Implemented Clean Architecture 4-layer (Domains → Applications → Interfaces → Infrastructures) with DI container. All 16 use cases tested with mock repositories — zero framework dependency. N+1 eliminated via PostgreSQL IN(…) + GROUP BY.',
      solutionId: 'Mengimplementasikan Clean Architecture 4-layer dengan DI container. Semua 16 use case diuji dengan mock repository — nol ketergantungan framework. N+1 dieliminasi via PostgreSQL IN(…) + GROUP BY.',
      impactEn: 'Accomplished Perfect Score 5/5 and 100% test coverage across 53 files — zero untested code paths across unit, integration, and functional layers. Eliminated 100% of manual deployment steps via GitHub Actions CI/CD.',
      impactId: 'Meraih Perfect Score 5/5 dan 100% test coverage di 53 file — nol jalur kode yang tidak diuji. Mengeliminasi 100% langkah deployment manual via GitHub Actions CI/CD.',
    },
  },
  // ── Tambahkan 8 project lainnya dengan format yang sama ──
  // darustrack-api, openmusic-api, e-procurement,
  // todolist-api, lecturer-api, bookshelf-api,
  // bookshelf-app, article-web
];