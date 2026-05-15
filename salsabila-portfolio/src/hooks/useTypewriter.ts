// src/hooks/useTypewriter.ts
// Migrasi dari terminal IIFE state machine di HTML lama
'use client';

import { useEffect, useRef, useState } from 'react';

interface TerminalLine {
  text: string;
  cls:  string;
}

interface TerminalSequence {
  cmd:   string;
  lines: TerminalLine[];
}

const SEQUENCES: TerminalSequence[] = [
  {
    cmd: 'npm test -- --coverage --testPathPattern="forum"',
    lines: [
      { text: ' PASS  Domains/threads/entities/NewThread.test.js',         cls: 'success' },
      { text: ' PASS  Applications/use_case/AddThreadUseCase.test.js',     cls: 'success' },
      { text: ' PASS  Infrastructures/http/_test/threads.test.js',         cls: 'success' },
      { text: '',                                                           cls: '' },
      { text: 'Test Suites: 53 passed, 53 total',                          cls: 'success' },
      { text: 'Coverage:    100.00% Statements | 100.00% Branches',        cls: 'success' },
      { text: 'Time:        5.842s',                                        cls: 'output' },
    ],
  },
  {
    cmd: 'go build ./... && go test ./...',
    lines: [
      { text: 'ok  github.com/salsabilarh/todo-api/domain     0.003s',     cls: 'success' },
      { text: 'ok  github.com/salsabilarh/todo-api/usecase    0.008s',     cls: 'success' },
      { text: 'ok  github.com/salsabilarh/lecturer-api        0.005s',     cls: 'success' },
      { text: '',                                                           cls: '' },
      { text: 'Build: success · runtime: go1.21 · gin + fiber',            cls: 'success' },
    ],
  },
  {
    cmd: 'docker compose up --build && nginx -t',
    lines: [
      { text: '[+] Building 3.1s (9/9) DONE',                              cls: 'success' },
      { text: '✓  api:3000       Started · Node.js 18-alpine',             cls: 'success' },
      { text: '✓  postgres:5432  Started · migrations applied',            cls: 'success' },
      { text: '✓  nginx:80       Proxying → :3000 · rate-limit: 90/min',   cls: 'success' },
    ],
  },
  {
    cmd: 'npx sequelize-cli db:migrate && npm run dev',
    lines: [
      { text: '== 20250101: createUsers: migrated (0.042s)',                cls: 'success' },
      { text: '== 20250115: createChangeRequests: migrated (0.031s)',       cls: 'success' },
      { text: '',                                                           cls: '' },
      { text: '16 migrations applied · 0 pending',                         cls: 'success' },
      { text: 'Server running at http://localhost:3000',                   cls: 'output' },
    ],
  },
];

type Phase = 'typing' | 'output' | 'pause' | 'clearing';

export function useTypewriter() {
  const [cmdText, setCmdText]     = useState('');
  const [outputLines, setOutputLines] = useState<TerminalLine[]>([]);

  const seqIdxRef  = useRef(0);
  const charIdxRef = useRef(0);
  const lineIdxRef = useRef(0);
  const phaseRef   = useRef<Phase>('typing');
  const timerRef   = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    function tick() {
      const seq = SEQUENCES[seqIdxRef.current];
      const phase = phaseRef.current;

      if (phase === 'typing') {
        if (charIdxRef.current < seq.cmd.length) {
          setCmdText(seq.cmd.slice(0, charIdxRef.current + 1));
          charIdxRef.current++;
          timerRef.current = setTimeout(tick, 50 + Math.random() * 30);
        } else {
          phaseRef.current  = 'output';
          lineIdxRef.current = 0;
          setOutputLines([]);
          timerRef.current = setTimeout(tick, 280);
        }

      } else if (phase === 'output') {
        if (lineIdxRef.current < seq.lines.length) {
          const line = seq.lines[lineIdxRef.current];
          setOutputLines((prev) => [...prev, line]);
          lineIdxRef.current++;
          timerRef.current = setTimeout(tick, lineIdxRef.current === 0 ? 180 : 155);
        } else {
          phaseRef.current = 'pause';
          timerRef.current = setTimeout(tick, 2600);
        }

      } else if (phase === 'pause') {
        phaseRef.current = 'clearing';
        tick();

      } else {
        setCmdText('');
        setOutputLines([]);
        charIdxRef.current  = 0;
        lineIdxRef.current  = 0;
        seqIdxRef.current   = (seqIdxRef.current + 1) % SEQUENCES.length;
        phaseRef.current    = 'typing';
        timerRef.current    = setTimeout(tick, 550);
      }
    }

    timerRef.current = setTimeout(tick, 900);
    return () => clearTimeout(timerRef.current);
  }, []);

  return { cmdText, outputLines };
}