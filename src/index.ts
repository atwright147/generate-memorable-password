import { generate } from './genrate';

const password = generate();

console.info({ password, length: password.length });
