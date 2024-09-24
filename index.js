const name = "Umidjon";
const surname = "Suvonov";

console.log(name.concat(" ", surname));
console.log(name + " " + surname);

const number = 3;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

const num1 = 12345678;
const num2 = 3456789875;
const operator = "-";

switch (operator) {
  case "/":
    console.log(num1 / num2);
    break;
  case "*":
    console.log(num1 ** num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "+":
    console.log(num1 + num2);
    break;
  default:
}

const string = "Hello World";

console.log(string.split("").reverse().join(""));

let result = "";

for (let i = string.length - 1; i >= 0; i--) {
  result += string[i];
}
console.log(result);

const sum = 45;
const n = 15;

for (let i = 1; i <= sum; i++) {
  console.log(i * n);
}

const arr = [1, 2, 3, 4, 5];
let s = 0;

for (let int = 0; int < arr.length; int++) {
  s += arr[int];
}
console.log(s);
