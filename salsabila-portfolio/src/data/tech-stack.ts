// src/data/tech-stack.ts
import type { TechCategory } from './index';

export const techCategories: TechCategory[] = [
  {
    id: 'backend', catKey: 'backend',
    labelEn: 'Backend & API', labelId: 'Backend & API',
    badges: [
      { name: 'Node.js',    level: 'expert' },
      { name: 'Express.js', level: 'expert' },
      { name: 'Hapi.js',    level: 'expert' },
      { name: 'Go / Gin',   level: 'advanced' },
      { name: 'Go / Fiber', level: 'advanced' },
    ],
  },
  {
    id: 'frontend', catKey: 'frontend',
    labelEn: 'Frontend', labelId: 'Frontend',
    badges: [
      { name: 'React.js',      level: 'expert' },
      { name: 'Vue.js',        level: 'advanced' },
      { name: 'Next.js',       level: 'advanced' },
      { name: 'Tailwind CSS',  level: 'advanced' },
      { name: 'Framer Motion', level: 'advanced' },
    ],
  },
  {
    id: 'database', catKey: 'database',
    labelEn: 'Databases', labelId: 'Basis Data',
    badges: [
      { name: 'PostgreSQL', level: 'expert' },
      { name: 'MySQL',      level: 'expert' },
      { name: 'MongoDB',    level: 'advanced' },
      { name: 'Redis',      level: 'advanced' },
      { name: 'Sequelize',  level: 'advanced' },
      { name: 'GORM',       level: 'advanced' },
    ],
  },
  {
    id: 'security', catKey: 'security',
    labelEn: 'Security & Auth', labelId: 'Keamanan & Auth',
    badges: [
      { name: 'JWT Dual-Token', level: 'expert' },
      { name: 'RBAC',           level: 'expert' },
      { name: 'Argon2',         level: 'expert' },
      { name: 'Bcrypt',         level: 'advanced' },
      { name: 'Helmet',         level: 'advanced' },
    ],
  },
  {
    id: 'testing', catKey: 'testing',
    labelEn: 'Testing & QA', labelId: 'Pengujian & QA',
    badges: [
      { name: 'Jest',          level: 'expert' },
      { name: 'Apache JMeter', level: 'expert' },
      { name: 'Postman',       level: 'expert' },
    ],
  },
  {
    id: 'devops', catKey: 'devops',
    labelEn: 'DevOps & Cloud', labelId: 'DevOps & Cloud',
    badges: [
      { name: 'Docker',          level: 'advanced' },
      { name: 'NGINX',           level: 'advanced' },
      { name: 'GitHub Actions',  level: 'advanced' },
      { name: 'AWS',             level: 'advanced' },
      { name: 'Railway',         level: 'advanced' },
      { name: 'RabbitMQ',        level: 'advanced' },
    ],
  },
];