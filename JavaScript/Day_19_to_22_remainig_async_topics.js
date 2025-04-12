//Date 06 April 2025 today i learn async await now i will jump into APIs tommorow:

/* What is Async/await : Async await is introduced in 2017 in ES8 updates and it is use to work with promises.. we declare a async function which using async keyword and while calling or inside the async function we use await keyword in front of the promise . by meaning of this is that the await keyword block the next line of code untill the promise is either resolved or rejected.. if the promise is nither resolved or rejected then the program will stuck and the next line of code kept blocking.. so the await keyword only can be used with async function we cannot use it seperately */

// async function fetchData() {
//   console.log("Fetching Data..");
//   const data = Math.random()>0.5; // retun true/false value randomly because as we know that the math.random return the value from 0 to 1 and we apply the condtion that if the conditon is greater than ,lets suppose 0.7 which is greater than 0.5 it return true if not exampler 0.3 than the value is not greater than 0.5 which is === false ;

/* we can handle errors with the async function inside or outside the function .to handle errors within function we use try/catch block (finally is optional) and to handle errors we use .then/.catch method to handle error because most of the time we are calling APIs inside function and we know well that Calling APIs return data as promises so to deal with those errors of promises we can use then and catch method but same errors if we have to handle inside the function we use try/catch.. */

//   try {
//     const promise = await new Promise((resolve, reject) => {
//       if (data) {
//         setTimeout(() => {
//           resolve("Data Fetched successfully...");
//         }, 2000);
//       } else {
//         reject("error occurred..");
//       }
//     });
//     console.log(promise);
//   } catch (error) { //handling errors
//     console.error(error);
//   }
// }
// fetchData(); // calling the function

/* Now in the previous code we learn about simentenously executing the code means await keyword wait until the promise is resolved or not but if we want to parellely runs whole tasks we can use promise.all to run all promises at same-time parellely */

// async function tasks() {
//   const promise1 = new Promise((resolve) => {
//     console.log("Task 1 is processing..");
//     setTimeout(() => {
//       resolve("Task 1 is completed");
//     }, 2000);
//   });

//   const promise2 = new Promise((resolve) => {
//     console.log("Task 2 is processing..");
//     setTimeout(() => {
//       resolve("Task 2 is completed");
//     }, 3000);
//   });

//   try {
//     const promise3 = new Promise((resolve) => {
//       console.log("Task 3 is processing..");
//       setTimeout(() => {
//         resolve("Task 3 is completed");
//       }, 4000);
//     });

//     /*all promises created with different time line to completed . if we handle each promises one by one (sequentially) we have to wait for 9s but with parellel execution we can do it in 4s*/

//     let results = await Promise.all([promise1, promise2, promise3]);
//     results.forEach((result) => {
//       console.log(result); //the result will print when last promise is done
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// await tasks();

// so now we are learning async chaining , an async chaining is used to process multiple task on a using a await in a forloop .. we use this when we a task i depend on the prevoius task's result.lets straight in practice mode to understand it better :

// creating a function to perform sequntially tasks one by one 
// async function processTasksSequentially(tasks) {
//     for (const task of tasks) {
//         try {
//             const result = await task();
//             console.log(result);
//         } catch (error) {
//             console.error(error);
//         }
//     }
// }

// //creating a function to to initialize tasks
// function tasks(output) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(output);
//         }, 2000);
//     })
// }

// //creating new tasks
// const task1 = () => tasks("Task 1 is completed.");
// const task2 = () => tasks("Task 2 is completed.");
// const task3 = () => tasks("Task 3 is completed.");

// //calling the loop function
// processTasksSequentially([task1, task2, task3]);
