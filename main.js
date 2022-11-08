import sepc from 'sepc';

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;
const pow = (a, b) => Math.pow(a, b);
const sqr = (a) => Math.sqrt(a);
const ping = () => null;

sepc({ add, sub, mul, div, mod, pow, sqr, ping }).listen(3000, '/v1');
