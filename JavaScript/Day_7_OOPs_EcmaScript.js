// Date 21/March/2025 Today i learn OPPs in JS and some ES6+ concepts tommorow i will start lerning DOM manipulation and Event Handling ... .

// Object : An object is a collection of data in Key: value pair . we can declare ,multiple types of data inside a single object . no matter its is a floating value a string or a funntion . to access
// let carObj = {
//     brandName: "Ford",
//     model : "Mustang GTD",
//     year: 2025,
//     color: "White",
//     engine: 5.2,
//     carState: () => {
//         console.log('car start'); // we can also declare functions inside an object these function are called a method .
//     }
// }
// console.log(carObj.brandName); // This is the traditional version of calling an object key (if the key is declared in double or single quotes Then the console throw Error)
// console.log(carObj["model"]); // This is the way to fetch the information from an object if the key of an object is define within the double quotes or single quotes ("").
// carObj.carState(); // calling the function of and object ....

// carObj.Year = 2049; //Updating the value of an object with traditional way .
// carObj["Year"] = 2049; // this a good way to do it.

// carObj.condition = "stock"; // Adding a new property
// carObj["wheels"] = "stock" ; // other Way

// delete carObj["wheels"]; // deleting an property

// console.log("year" in carObj); // check if a object has a property/Key ? // output will be :true
// // console.log(carObj.hasOwnProperty("year")); // checking a property with hasOwnProperty Output : true

// let car2Obj = { ...carObj }; //this is the way to create a shallow copy of an object .we can use "..." three dots to create a shallow copy of an object ..
// car2Obj.brandName = "Toyota";
// car2Obj.model = "Hilux";
// car2Obj.year = 2025;
// car2Obj.color = "Black";
// car2Obj.engine = 3.0;
// car2Obj.engine = car2Obj.engine.toFixed(1);
// console.log(carObj);
// console.log(car2Obj);

// for (let key in carObj) {
//     console.log(key, ":", carObj[key]);
// }

// Class : Classes is just like a blueprint for creating an object or instance . we define multiple function inside an class these functions are special types of functions it called as method . the first method we declare in class always has name of "constructor" .we cannot change it .This is a default method we always have to create it and this is always executed when we create a a instance of the class .it contains a "this" keyword similar to python "self" keyword . it is indicting the property of the constructor. lets go to and example :

// class car {
//   constructor(brandName, model, year, color) {
//     this.brandName = brandName;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }

//   get properties() {
//     // static method belong to the class not instance ,static is a method where we can directly call a method of a class withod creating a instance of class ....
//     return "this is a method";
//   }
//   get fullInfo() {
//     return `The car brand is : ${this.brandName}, model: ${this.model}, year : ${this.year}, color : ${this.color}`;
//   }
// }

// let car1 = new car("Toyota", "Hilux", 2025, "Black");

// console.log(car1.brandName);
// console.log(car1.model);
// console.log(car1.color);
// console.log(car1.year);

// delete car1.year; // deleting an object .

// console.log(car1 instanceof car); //checking if an car instance is the instance of a class

// console.log(car1.fullInfo); // calling these properties without get parentheses ()
// console.log(car1.properties);

// if (car1.year === 2025) {
//   console.log("This is going to be Expensive..");
// } else {
//   console.log("I can easily affrod it...");
// }

// car.properties(); //calling method without an instance

// Enacpsulation :Encapsulation is a cincept in OPPs which representing hiding unnecessery infomation from the end user it is just a thorotical concept but very important.Lets understand with an example :

// class Bank {
//   #balance; // creating a private variable it can onl acess within the class
//   constructor(name, balance) {
//     this.name = name;
//     this.#balance = balance;
//   }

//   get getBalance() {
//     return `${this.#balance} AED`; //return current balance
//   }
//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;  // if the balance is negative then throw an error messege..
//     } else {
//       console.log("Negative amount ....");
//     }
//   }
//   withdraw(amount) {
//     if (amount <= this.#balance) {
//       this.#balance -= amount;
//       console.log("Transaction completed..");  //checking if the balance is not less then withdrawing amount
//       console.log(`Available Balance is : ${this.#balance} AED`);
//     } else {
//       console.log(
//         `You are trying to withdraw ${amount} but the Available amount is : ${
//           this.#balance
//         } AED`
//       );
//     }
//   }
// }
// let bankaccount = new Bank("Manpreet Singh", 2000); //creating a new instance of the class
// bankaccount.deposit(2000); //deposit 2000 balance is now == 4000
// bankaccount.withdraw(5000); // withdraw is not performed because the of insufficent fund balance 4000
// console.log(bankaccount.getBalance);

// Acess- modifiers : these are the special type of variable which can only acess within the class ,or sub class on can be acess outside the classes:These are:
//Public ,private,protected
//public can be used anywhere
//private can only use within the class and declared with "#" hash . outside of the constructor..
//protected declard with "_" underscore at the starting of the variable name.

//inheritance:Inheritance is one of the ,main pillare of OPPs .It is used to inheritate the properties of
// from base class to child class ,the child class hold the properties of parent class but we can also
// declare additional properties to child class.the only reason to use inheritance is to reduce redundency
// of the code and avoid repetive lines of the code .it improve the readablity of the code :
// class father {                //creating a father class
//   constructor(tall, brave) {
//     this.tall = tall;
//     this.brave = brave;
//   }
//   get isBrave() {
//     if (this.brave) {
//       return "He is Brave.";
//     } else {
//       return "Not Brave.";
//     }
//   }
//   get isTall() {
//     if (this.tall) {
//       return "He is Tall.";
//     } else {
//       return "He is not Tall.";
//     }
//   }
// }
// class child extends father { // inheriting the properties of father class inside child class using "extends"
//   constructor(educated) {
//     super(); //inhritating the parent class's constructot properties inside child class implicitly .
//     this.educated = educated;
//   }
//   get isEducated() {
//     if (this.educated) {
//       return "He is Educated.";
//     } else {
//       return "Uneducated";
//     }
//   }
// }
// let isFather = new father(true, true); // assign values
// let isChild = new child(true);
// console.log(isFather.isBrave);
// console.log(isFather.isTall);
// console.log(isChild.isTall);

//polymorphism : It stand for "many forms" .means a method can behave differently in diffrent situtions.The polymorphism has two concepts :
//Method ovrloading
//Method overridin
// class Calculator {
//   add(a = 0, b = 0) { // y default the value is 0 to handle the error if user didnt give any value
//     console.log(a + b);
//   }
// }

// class Calculator2 extends Calculator{
//     add(a = 0, b = 0) {
//         console.log(`The result is : ${a + b}`); //modifying the properties of parent class method called method overriding
//       }
// }
// let calc1 = new Calculator();
// let calc2 = new Calculator2();

// calc1.add();// output : 0
// calc1.add(5 + 5);//output : 10 //method overloading in action
// calc2.add(2,2)

//Abstraction : it is a way to hide unnecessary details for example in a "car" the engine(logic) is hide inside the hood we cannot directly see it .we have only given the accelator,brake,clutch,and gears to use it :
// class Car {
//   constructor() {
//     this.speed = 0;
//   }
//     get accelrate() {
//         this.speed += 10;
//         return `The car speed is running at ${this.speed}km/h`;

//     }
//     get brake() {
//         if (this.speed === 0) {
//             return "Car is parked";
//         } else {
//             this.speed -= 10;
//             return `The car speed is ${this.speed}km/h`
//       }
//     }
// }
// let car1 = new Car();
// console.log(car1.accelrate);
// console.log(car1.accelrate);
// console.log(car1.accelrate);
// console.log(car1.accelrate);
// console.log(car1.accelrate);
// console.log(car1.accelrate);
// console.log(car1.accelrate);
// console.log(car1.brake);

// Now its time to learn ES6+ conecepts : The Ecma scrpit + concepts are introducesd from 2015 in they release new features of JS in it every year .there are some of the concepts of es6+ although i learned most of the features before i only covering those concepts which i will learning for now:

//1st : Destructuring : To assign of array or object to a varaible :

// let arr = [10, 20, 30]; //Destructuring in Array

// const first = arr[0]; //Assigning array values to a variable without Destructuring ..
// const two = arr[1];
// const three = arr[2];

// const [first, two, three] = arr; // Using Destructring only in one line
// const [first, , three] = arr; //skipping a value

// console.log(first);
// console.log(two);
// console.log(three);

// let person = { name: "Manpreet singh", job: "Frontend Developer" }; //Destructuring in Object

// const name = person.name; //Traditional way
// const job = person.job;

// const { name, job } = person; //Using Destructuring ..

// console.log(name);
// console.log(job);

//2nd : Rest and spread operator:

// let arr = [10, 20, 30, 40, 50, 60, 70];

// const [num1, num2, num3, ...rest] = arr; //The remaining values of an array is assign to the rest

// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(rest); // calling rest output : [ 40, 50, 60, 70 ]

//Another example of Rest by using it in a function

// let sum = (...numbers) => {
//     return numbers.reduce((val1, val2) => val1 + val2, 0);
// }

// console.log(sum(10,20,30,40));

//Spread : it is used to combine two array inside one 
// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];

// let combineArr = [...arr1, ...arr2];

// console.log(combineArr);

