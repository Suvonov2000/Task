const n = 3;

console.log(n ** 2, n ** 3);
console.log(Math.pow(n, 2), Math.pow(n, 3));
console.log(n * n, n * n * n);

const number = 3;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

const num1 = 5;
const num2 = 10;
const operator = "+";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  default:
}

const num = 8;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

const string = "Umidjon";
console.log(string.split("").reverse().join(""));

let result = "";

for (let i = string.length - 1; i >= 0; i--) {
  result += string[i];
}

console.log(result);

const numbers = "3456789097247893578933";
console.log(String(numbers).length);

const year = 2024;
if (year % 4 === 0) {
  console.log("Leap year");
} else {
  console.log("Not leap year");
}

const sum = 40;
let nomer = 4;

for (let i = 1; i <= sum; i++) {
  console.log(n * i);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let yen = 0;

for (let i = 0; i < arr.length; i++) {
  yen += arr[i];
}
console.log(yen);

let str = "Uzbekistan is my countr";
let newStr = str.split("n").join("x");
console.log(newStr);
