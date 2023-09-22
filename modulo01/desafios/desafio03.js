let a = 7;
let b = 94;
const temp = a;
// Depois da troca... a = 94 e b = 7

a = b;
b = temp;

console.log(a, b);

// [a, b] = [b, a]


