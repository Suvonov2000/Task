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
