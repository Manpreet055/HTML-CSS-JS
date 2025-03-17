//Date 17/March/2025 today i learn about array and forin and forof loops;
//Exercise to calculate avg of array elements .. 
//Array methods :

//1: push() and pop(): to push(add) and pop(delete from the end and persent the item) a element at the end of the array.
// let arr = [1, 2, 3, 4, 5];
// arr.push(6);
// console.log(arr);

//2:toString(): to convert a array into string()
// let fooditems = ["apple", "banana", "mango"];
// fooditems=fooditems.toString();
// console.log(fooditems);

//3:slice():same as string method it take starting and ending value and give it as an output (remember the ending value is excluded);
// let fooditems = ["apple", "banana", "mango"];
// console.log(fooditems.slice(1,3));

//4:splice() : it is use to delete an items and update remove etc.
// let fooditems = ["apple", "banana", "mango"];
// fooditems.splice(1, 1, "grapes");
// console.log(fooditems);

//5:unshift()&shift():unshift() &shift()is use to add  o delete value at the starting of the array
// let fooditems = ["apple", "banana", "mango"];
// fooditems.unshift("guava");
// console.log(fooditems);

//6: concat():same as string method it is used to combine two or more array into an array
// let marvelHeros = ["iron-man", "Thor", "Captain-america", "Hulk", "Black-panther"];
// let dcHeros = ["Batman", "superman", "flash", "cyborg"];
// marvelHeros=marvelHeros.concat(dcHeros);
// console.log(marvelHeros);

//some Exercise :(for logic building);
// let arr = [22, 33, 445, 6, 6, 7776, 3]; //this is a array lust like python list .
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     sum += arr[i];
// }
// let avg = sum / 2;
// console.log(`The average marks is :${avg}`);

//to apply 10%off on each element of an array :
// let items = [250, 350, 450, 650];
// for (let i = 0; i < items.length; i++){
//     items[i] =items[i]* (0.90);
// }
// console.log(items);

// add/delete operations on array
// let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// arr.shift(1);
// arr.splice(1, 1, "Ola");
// arr.push("Amazon")
// console.log(arr);

//for...in && for...of in JS loops :\

//for...in (in objects)
// let obj = {name: "manpreet"
//     ,age: 22
//     ,job: "Frontend developer"
// }
// for (let value in obj) {
//     console.log(value ,":",obj[value]);
    
// }
//for...in in arrays
// let arr = ["Manpreet singh", 22, "Frontend developer"];
// for (let arr1 in arr) {
//     console.log(arr1,":",arr[arr1]);
// }

//for...of not works in objects but works in array and string because they are iterable; 
//in array
// let arr = ["Manpreet singh", 22, "Frontend developer"];
// for (let arr1 of arr) {
//     console.log(arr1);
// }

//in string
// let str = "Hello";
// for (let char of str) {
//     console.log(char);
    
// }
