// i already revise variables data types etc: i just do rough work here.

//Math Object
// let users = ["user1", "user2", "user3", "user4", "user5", "user6", "user7", "user8", "user9", "user10"];

// let randomIndex = Math.floor(Math.random() * users.length);
// let randomUser = users[randomIndex];
// console.log(randomUser);

//Ternary Operator
// let userAge = 17;
// let canDrive = userAge >= 18 ? "yes" : "No";
// console.log(canDrive);

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// console.log(numbers.length);

// numbers.forEach(Number => {
//     console.log(Number);
// });

// let a = (1, 2, 3); // a will be 3
// for (let a = 1, b = 5; a <= 5; a++, b--){
//     console.log(a, b);
// }

// let greet = name => `Hey ${name}`;
// console.log(greet("Manpreet"));

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// for (let i = 1; i < 10; i++){
//     console.log(`${i} number of iteraion`);
//     for (let j = 1; j < 10; j++){
//         console.log(j);
//     }
// }

// let person = {
//     name: "Manpreet",
//     Job: "frontend develpor",
//     age:22
// }

// for ( let key in person) {
//     console.log(`${key} : ${person[key]}`)
// }

// let arr = ["Manpreet singh", 22, "FrontEnd developer"];
// for (let property of arr) {
//     console.log(property);
// }

// arr.forEach((property) => {
//     console.log(property);
// })

// 2D Array 
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < arr.length; i++){
//   for (let j = 0; j < arr[i].length; j++){
//     console.log(arr[i][j]);
//   }
// }


// let arr = [2,3,4,1,5,6,0,9,7,8,9,6];
// arr.push(11); //add value at the end
// arr.pop(); //remove value from the end
// arr.shift(); //remove the first element from array
// arr.unshift(0); //add the value at first index
// arr.forEach((element) => {
//     console.log(element);
// })
// console.log(arr.includes(8));
// console.log(arr.indexOf(8));
// arr = arr.slice(0,4)
// arr.forEach((num, index) => {
//   console.log(index, num);
// });

// sorting array
// let sortedArr = arr.sort((a, b) => b - a);
// console.log(sortedArr)

// let person = {
//   name: "Manpreet",
//   role: "Frontend-Developer",
//   age:22
// }

// for (let key in person) {
//   console.log(`${key}:${person[key]}`);
// }

// let newArr = arr.map((x) => x + 2); Map method
// arr = arr.filter((x) => x % 2 === 0); Filter method is used to filter items based on condtion
// arr = arr.reduce((x, y) => x + y); return single value
// console.log(arr);

// let arr = [2, 3, 4, 1, 5, 6, 0, 9, 7, 8, 9, 6];

// let[a,b,c,d,...rest] = arr;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(rest)

// let arr2 = [...arr, 2, 3, 4];
// console.log(arr2);

let person = {
  name: "Manpreet",
  age: 22,
  jobRole: "Frontend Developer",
  show() {
    console.log(this.age);
  }
}
person.show();
// console.log(person.name.city?.address ??"Not define");


