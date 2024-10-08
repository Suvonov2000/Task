function factorial(n) {
  let result = 1;
  let i = n;

  while (i > 0) {
    result *= i;
    i--;
  }
  return result;
}

let n = 5;
console.log(factorial(n));
