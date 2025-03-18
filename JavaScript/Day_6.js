//Date 18/March/2025 today i learn about function ,arrow function and forEach method,map,filter,reduce..

// Excersie of finding the vowel and its total number of vowel in the sting using a function
// function findVowel(str) {
//   let count = 0;
//   for (let char of str) {
//     if (
//   char === "a" ||
//   char === "e" ||
//   char === "i" ||
//   char === "o" ||
//   char === "u"
//     ) {
//       console.log(`Find a vowel : ${char}`);
//       count++;
//     }
//   }
//   console.log(`The number of vowel in string is : ${count}`);
// }
// findVowel("Hello!World");

//Same program using a arrow function :
// let vowel = (str) => {
//   let count = 0;
//   let index = 0;
//   for (let char of str) {
//     index++;
//     if (
//       char.toLowerCase() === "a" ||
//       char.toLowerCase() === "e" ||
//       char.toLowerCase() === "i" ||
//       char.toLowerCase() === "o" ||
//       char.toLowerCase() === "u"
//     ) {
//       console.log(`Find a vowel... ${char} at index : ${index}`);
//       count++;
//     }
//   }
//   console.log(count);
// };
// vowel("Manpreet Singh");

//forEach method :This is a higher order funtion or method ,A higher order function is function which use another function as a parameter or return a function.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenValue = (value) => {
//   if (value % 2 == 0) {
//     console.log(`Even number : ${value}`);
//   }
// };
// arr.forEach(evenValue);

//practice question to find the square of given elements of array ;
// let arr = [2, 4, 5, 6];
// let square = (val) => {
//   console.log(val * val);
// };
// arr.forEach(square);

// map ,filter ,reduce :they are also the highorder function .
// 1:map() is a function which is used to create a new array by performing a task on each element of the array whichr is define within the map function .
// let arr = [1, 2, 4, 5, 6];
// let newarr = arr.map((val) => { //"val" represent each element of array and we cam perform operation on "val".is work like a loop means its iterarte each element of array  one by one ;
//   return val + 2;
// });
// console.log(newarr);

// 2: filter():as we can imagine with its name we are getting a new filtered array :example:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNum = arr.filter((val) => {
//   if ((val % 2 === 0) & (val > 3)) {
//     return val;
//   }
// });
// console.log(evenNum);

// 3:reduce() :reduce perform operation on array element and return a single value for example i we want to print the sum of array . the reduce function take two parameters first one is the previuos value and second is the current value . we can perform operation betwenn two of them and then the result will stored in the previous value then it will go to the next iteraion ...
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr1 = arr.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(arr1);

//exercise 1:we are given an list of marks .filter out the marks which is above 90 ,
// let marks = [66, 88, 89, 95, 94, 92];
// let filteredOut = marks.filter((val) => {
//   if (val > 90) {
//     return val;
//   }
// });
// console.log(filteredOut);

//exercise 2:take a input from user of n number create a array from 1 to n number ,and find the sum of those elements:
// let userInput = prompt("Enter a number : ");
// let userInput = 10;
// let arr = [];
// for (let value = 1; value <= userInput; value++) {
//   arr[value-1] = value;
// }
// console.log(arr);
// let sumOfarr = arr.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(sumOfarr);

// let productOfarr = arr.reduce((prev, curr) => {
//   return prev * curr;
// });

// console.log(productOfarr);
