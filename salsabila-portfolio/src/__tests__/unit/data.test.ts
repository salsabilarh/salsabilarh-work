// src/__tests__/unit/data.test.ts
// ═══════════════════════════════════════════════════
// Test untuk memastikan semua data di src/data/
// memenuhi TypeScript interface contract-nya.
// Ini mencegah kita menambah project dengan field
// yang kurang dan baru ketahuan saat sudah live!
// ═══════════════════════════════════════════════════

import { projects }       from '@/data/projects';
import { experiences }    from '@/data/experience';
import { certificates }   from '@/data/certificates';
import { techCategories } from '@/data/tech-stack';

describe('projects data integrity', () => {
  it('should have at least 3 projects', () => {
    expect(projects.length).toBeGreaterThanOrEqual(3);
  });

  it('every project should have required fields', () => {
    projects.forEach((p) => {
      expect(p.id).toBeTruthy();
      expect(p.category.length).toBeGreaterThan(0);
      expect(p.titleEn).toBeTruthy();
      expect(p.titleId).toBeTruthy();
      expect(p.descEn).toBeTruthy();
      expect(p.descId).toBeTruthy();
      expect(p.highlights.length).toBeGreaterThan(0);
      expect(p.stack.length).toBeGreaterThan(0);
      expect(p.psi.impactEn).toBeTruthy();
      expect(p.psi.impactId).toBeTruthy();
    });
  });

  it('every project id should be unique', () => {
    const ids = projects.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(projects.length);
  });

  it('every category should be a valid filter key', () => {
    const validCategories = ['fullstack', 'backend', 'frontend', 'enterprise', 'competition'];
    projects.forEach((p) => {
      p.category.forEach((cat) => {
        expect(validCategories).toContain(cat);
      });
    });
  });
});

describe('experiences data integrity', () => {
  it('should have at least 3 experiences', () => {
    expect(experiences.length).toBeGreaterThanOrEqual(3);
  });

  it('every experience should have required fields', () => {
    experiences.forEach((e) => {
      expect(e.id).toBeTruthy();
      expect(e.roleEn).toBeTruthy();
      expect(e.company).toBeTruthy();
      expect(e.achievementsEn.length).toBeGreaterThan(0);
      expect(e.achievementsId.length).toBeGreaterThan(0);
    });
  });
});

describe('certificates data integrity', () => {
  it('should have at least 10 certificates', () => {
    expect(certificates.length).toBeGreaterThanOrEqual(10);
  });

  it('every certificate should have a valid URL', () => {
    certificates.forEach((c) => {
      expect(c.url).toMatch(/^https?:\/\//);
    });
  });
});

describe('techCategories data integrity', () => {
  it('should have exactly 6 categories', () => {
    expect(techCategories.length).toBe(6);
  });

  it('every category should have at least 3 badges', () => {
    techCategories.forEach((cat) => {
      expect(cat.badges.length).toBeGreaterThanOrEqual(3);
    });
  });
});