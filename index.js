const isEven = function isEven(num) {
  if (num % 2 === 0) {
    return "true";
  } else {
    return "false";
  }
};

console.log(isEven(8));
console.log(isEven(7));

let is_even = function is_even(number) {
  return number % 2 === 0;
};

console.log(is_even(8));
console.log(is_even(7));

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));

function greet(name) {
  console.log(`Hello ${name}`);
}
greet(`Alice`);
