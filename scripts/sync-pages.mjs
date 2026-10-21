import { cpSync, mkdirSync } from 'node:fs';
mkdirSync('docs', { recursive: true });
cpSync('dist', 'docs', { recursive: true });
