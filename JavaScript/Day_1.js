// Date 12/march/2025 //today i learn about data types ,variable, type conversion etc.

// simple program
var myName = "Manpreet singh";
console.log(myName);

// integer value
var myAge = "22";
console.log(myAge);
console.log(typeof +myAge);


//converting myAge into an string 
var strmyAge = (myAge+ "");
console.log(typeof strmyAge);
console.log(typeof myAge);

//converting it using parse 
var intmyAge = parseInt(strmyAge);
console.log(typeof intmyAge)

// practice questions...
console.log(5 + "5") // "5" is a string, so JS converts number 5 into a string → "55"
console.log(5 - "5") //output : 0
console.log(true+true) // output : 2
console.log(false + false) // output : 0
console.log(true-false) //output : 1
 

//types of datatypes:
//Primitive datatypes are 7:
//  Number 
//  String
//  BigInt
//  undifined
//  null
//  Boolean
//  Symbol
//Object Datatypes are 3:
//  Object
//  function
//  array
//
//How to define a variable:
//  var myName = "Manpreet singh"; Older way before ES6 /can use globally !
//  let myName = "Manpreet singh"; after ES6/used to define a block level variable..
//  const myName = "Manpreet singh"; constenet variable means its value unchangable...
//
//Type conersion/Type Casting
//  There are so many method in JS of typecasting and also comes new method of typecasting in ES6
//  using + symbol to convert string into Int
//      let _myAge = "22";
//      let int_myAge = +_myAge;
//      console.log(typeof int_myAge) output : number
//  
//  using +"" to convert int into string
//      let myAge = 22;
//      let strmyAge= (myAge + "");
//      console.log(typeof strmyAge)  output : string
//
//  using parseInt and parseFloat 
//      let myAge = "22.5";
//      let floatmyAge = parseFloat(myAge)
//      let intmyAge = parseInt (myAge)
//
//
//
//
//
//
//