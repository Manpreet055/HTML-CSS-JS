// Date 04 April 2025 today i learn callback,call back hell ,promises ,promise chaining etc .
//What is ascynchronus and synchronus programming ? the async programming refering to a term to execute the next lines of code if
//the current task is taking more time to execute.... it makes the code faster.. while on the hands the synchronus programming is a
// a refers to term tostop the code to execute until the current code is being executed ..this makes our code slow but Js is ascynchronus by nature which make it faster .
//Example of async code
// console.log("dataFetch");
// setTimeout(() => {
//   console.log("fetching data....");
// }, 2000); // takes 2 second to execute
// console.log("Data fetched."); //this statement will execute..
// output : d
// dataFetch
// Data fetched.
// fetching data....

// what is a callback ? A callback is refers to a term to use a function as a parameter below is the example of callback.Here this
// we can use setTimeout to wait for few seconds until the previous task is being processed !

// function fetchData(callback) {
//     console.log("Fetching data...");
//     setTimeout(() => {
//         callback("Here is your data");
//     }, 2000);

// }

// function fetchedData(data) {
//     console.log("Data fetched", data);
// }

// fetchData(fetchedData);

//what is callback hell ? a callback hell is happens when we use multiple call backs(nesting) as parameters which make it difficult to understand the code.for Example :

// function dataFetch(callback1, callback2) {
//   console.log("Data Fetch....");
//   setTimeout(() => {
//     callback1();
//     setTimeout(() => {
//       callback2();
//     }, 3000);
//   }, 2000);
// }
//as we can see here that settime out is placed inside other settimeout which makes it difficult understand and maintain
//this is happens because of nesting callbacks .... it is also called as a "Pyramid of doom".....

// function dataFetching() {
//   console.log("fetching data");
// }

// function dataFetched() {
//     console.log("data fetched sucessfully...")
// }

// dataFetch(dataFetching, dataFetched);

//To tackle this callback hell situation the concepts of promises is introduced ..

const promise = new Promise((resolve, reject) => {
  const data = false;
  if (data) {
    resolve("Data fetching suessfully..");
  } else {
    reject("An error occured..");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
console.log(promise);
