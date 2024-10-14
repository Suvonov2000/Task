function addAge(obj, age) {
  obj.age = 25;
  return obj;
}
const person = { name: `Alice` };
console.log(addAge(person, 25));
