import { generate } from './generate';

const password = generate();

console.info({ password, length: password.length });
