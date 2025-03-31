let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((Number) => {
  console.log(Number * 2);
});
const user = { name: "John", address: { city: "New York" } };
console.log(user.address?.city); // New York
console.log(user.address?.zip); // undefined
// In a method
const obj = {
  name: "John",
  greet() {
    console.log(this.name); // John
  },
};
obj.greet();

// In a regular function
function regular() {
  console.log(this); // Global object (window in browsers)
}
regular();

// In an arrow function
const arrow = () => {
  console.log(this); // Lexically inherits `this` from the surrounding scope
};
arrow();