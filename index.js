const firstName = "Umidjon";
const lastName = "Suvonov";

console.log(firstName.concat(" " + lastName));
console.log(firstName + " " + lastName);

const n = 3;

console.log(n ** 2, n ** 3);
console.log(Math.pow(n, 2), Math.pow(n, 3));
console.log(n * n, n * n * n);

const number = 9;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("odd");
}

const num1 = 5;
const num2 = 5;
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
  case "**":
    console.log(num1 ** num2);
    break;
}

const str1 = "apple";
const str2 = "orange";

str1.length >= str2.length ? console.log("Longer") : console.log("Shorter");
