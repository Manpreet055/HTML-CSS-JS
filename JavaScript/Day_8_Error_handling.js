// Date 23/March/2025 Today i learn Optional chaining and nullish coalescing and Error Handling:After that im ready to dive into Dom and events but i give some to time to practice my whole learning of previous days ..

//1:Optional chaining : Optional chaining is a concept of ES6+ JS .It is use to handle errors of when we are trying to acess a properties of a  netsed object or Array .We can use "?." this operator to handle that error using this we can set the value to undefine if the value is not declare.

// let person = {
//   name: "Manpreet singh",
//   age: 22,
//   adress: {
//     state: "Punjab",
//   },
// };

// console.log(person.adress.city.place); // Output:Cannot read properties of undefined (reading 'place')
// console.log(person.adress.city?.place); // Output:undifined

//Nullish coalescing : It is also ES6+ concepts it is use to give values to the undifined or null .we can use it with optional chaining operator . Lets see an example .

// console.log(person.adress.city?.place ?? "City is not defined"); // Output : City is not defined
//even with variables:

// let value;
// console.log(value ?? 100); //Output : 100

//Error Handling : Its is used to handle run time errors for example our website is running if the error comes in our code our whole syetem can crash to prevent this situation.

// try {
//   //try block used to try if the code works if not
//   let value = Hello; //refering an undefined variable .....
// } catch (error) {
//   //then catch section will be executed .
//   console.log("something happens :", error.messege); // Output : something happens :  undefined
// }

//throw is used to create custom error

// let age = (age) => {
//   if (age >= 18) {
//     console.log("You can get a Driving License ....");
//   } else {
//     throw new Error("You are underage ....");
//   }
// };

// try {
//   console.log(age(16));
// } catch (error) {
//   console.log("You cannot have a Driving License beacause", error.message);
// } finally {
//   console.log("Procedure completed");
// }

//lets talk about lexical scope & closures in JS

// function foreman() {
//   let material1 = "msTube";
//   let material2 = "msPipe";
//   function worker_work() {
//     let infrastructure = material1 + " " + material2; //workers has acess to the material..
//     console.log(infrastructure);
//   }
//   return worker_work;
// }

// let work = foreman(); //work hold the return value worker_work provided by foreman .
// work(); // As functions are first class objects which means the varaiable we are assigning to it can call just like function work(); intead of console.log(work);

// IIFE (Immediately Invoked Function Expression) :It is used to build a function which can only used once and immediately execute and invoked after running the code ,we can give it properties like loading screen which means it can only execute and the code inside it will be invoked after this which means our website become light-weight . we should define properties which is only work for one.

// (function (name) {
//   console.log("Hello! " + name);
// })("Manpreet singh"); // it only work from one and after this it become dead code cause until we refresh our webpage, it don't even have a name to call it again.



