// src/data/index.ts
// ═══════════════════════════════════════════════════
// Central export file + Type definitions
//
// Kenapa types didefinisikan di sini?
// Supaya semua data files pakai kontrak yang sama.
// Kalau ada field baru, tambah di interface ini —
// TypeScript akan kasih tahu semua file yang perlu diupdate.
// ═══════════════════════════════════════════════════

// ── Project ──────────────────────────────────────────
export interface ProjectPSI {
  problemEn:  string;
  problemId:  string;
  solutionEn: string;
  solutionId: string;
  impactEn:   string;
  impactId:   string;
}

export interface Project {
  id:         string;
  category:   string[];      // ['backend', 'fullstack', ...]
  award:      string;
  titleEn:    string;
  titleId:    string;
  orgEn:      string;
  orgId:      string;
  descEn:     string;
  descId:     string;
  highlights: string[];
  stack:      string[];
  github:     string;
  live:       string;
  psi:        ProjectPSI;
}

// ── Experience ────────────────────────────────────────
export interface Experience {
  id:           string;
  type:         'intern' | 'competition' | 'freelance';
  roleEn:       string;
  roleId:       string;
  typeBadgeEn:  string;
  typeBadgeId:  string;
  company:      string;
  periodEn:     string;
  periodId:     string;
  achievementsEn: string[];
  achievementsId: string[];
  stack:        string[];
}

// ── Certificate ───────────────────────────────────────
export interface Certificate {
  id:       string;
  category: string;         // 'backend' | 'cloud' | 'database' | ...
  icon:     string;
  titleEn:  string;
  titleId:  string;
  issuer:   string;
  date:     string;
  url:      string;
}

// ── Tech Badge ────────────────────────────────────────
export interface TechBadge {
  name:  string;
  level: 'expert' | 'advanced';
}

export interface TechCategory {
  id:       string;
  catKey:   string;         // 'backend' | 'frontend' | ...
  labelEn:  string;
  labelId:  string;
  badges:   TechBadge[];
}

// ── Achievement ───────────────────────────────────────
export interface Achievement {
  id:     string;
  title:  string;
  bodyEn: string;
  bodyId: string;
}

// Re-export semua data
export { projects }      from './projects';
export { experiences }   from './experience';
export { certificates }  from './certificates';
export { techCategories } from './tech-stack';
export { achievements }  from './achievements';