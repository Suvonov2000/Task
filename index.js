// const string = "Suvonov Umidjon";

// console.log(string.split("").reverse().join(""));

const string = "hello";

let result = "";

for (let i = string.length - 1; i >= 0; i--) {
  result += string[i];
}
console.log(result);
