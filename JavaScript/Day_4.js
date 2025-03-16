// Date 15/March/2025 Today i learn about loops in JavaScript

//** printing a multiplication table using while loop **
// let a = 1;
// while (a <= 10) {
//     console.log("4 x " + a + " = " + 4 * a);
//     a++;
// }

// ** printing a multiplication table using do-while loop **
// let num = 1;
// do {
//     console.log("5 x " + num + " = " + 5 * num);
//     num++;
// } while (num <= 10);

// ** printing a multiplication table using for loop **
// for (let i = 1; i <= 10; i++){
//     console.log("10 x " +i+ " = " +10 * i);
// }

// sum of numbers from 1 to 10
// let sum = 0;
// for (let num = 1; num <= 10; num++){
//     sum += num;
// }
// console.log("The Result is :", sum)

//printing even number till 50
// let value = 1;
// while (value <= 50) {
//     if (value % 2 == 0) {
//         console.log (value)
//     }
//     value++;
// }

//finding factorial of n number
// let n = 10;
// let factorial = 1;
// while (n > 0) {
//     factorial *= n;
//     n--;
// }
// console.log(factorial)

// i also learn string and string methods
//string methods : There are lots of string methods available in JS but we can only discuss commonly used methods in JS Which are :-
//1: .toUpperCase() & .toLowerCase() :These are the methods to convert a string into uppercase and lower case.
// let name = "Manpreet Singh";
// name = name.toLowerCase();
// console.log(name);
// name = name.toUpperCase();
// console.log(name);

//2: .trim(): trim is a string method used to remove all the whitespaces before and after the string (Remember it does not remove space between string)
// let str = "   Manpreet Singh   ";
// str = str.trim();
// console.log(str);

//3: .concat(): This method is used to join two string in one string .. 
// let firstName = "Manpreet ";
// let lastName = "Singh";
// let fullName = firstName.concat(lastName);
// console.log(fullName);

//4: replace(): replace method is used to replace a string instance . 
// let name = "Manpreet";
// name = name.replace("Man", "Jashan");
// console.log(name);

//5: CharAt(): It is a method used to find a character of a string at given index ..
// let name = "manpreet";
// console.log(name.charAt(4));

// 6. .slice(start , end):its is use to print a specific portion of a string . 
// `let myName = "Manpreet";
// console.log(myName.slice(3,5));`


//7: .length:length is a method used in JS string to find the length of a string . 
// let name = "manpreet";
// console.log(name.length);

//8: [value] : it is just like charAt method with easy syntax
// let myName = "Jashanpreet"; 
// console.log(myName[6]);

// 9: reverse : however there is no built in method to reverse a string but we can definitely use a loop to reverse the string 
// let name = "manpreet";
// let emptystr = "";
// for (let i = name.length - 1; i >= 0; i--){
//     emptystr += name[i];
// }
// console.log(emptystr)
// printing a star pattern
// let star = "*";
// let pattern = star; 
// for (let i = 1; i <= 15; i++){
//     console.log(pattern);
//     pattern += star;
// }

//reverse a star pattern
let stars = "*".repeat(15);
let pattern = stars;
for (let i = stars.length; i > 0; i--){
    pattern = pattern.slice(0, -1);
    console.log(pattern)

} 
    


