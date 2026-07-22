import { fuzz } from 'fuzz.ts';
fuzz('POST /auth', { username: 'fuzz', password: 'fuzz' });
