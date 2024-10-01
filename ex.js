const n = 986445;
let sum = 0;

for (let i = 0; i <= String(n).length - 1; i++) {
  sum += Number(String(n)[i]);
}

console.log(sum);
