// Date 05 april 2025 learn promise chaining and some promise methods
//promise chaining is a way to define multiple promise checks we can say . for example in the below example
//the first .then method perform a task and return the next promise to check if the first promise is not fulfilled than the next promise will not exectue for checking .And single .catch block can handle the all promise erorrs.
const promise = new Promise((resolve, reject) => {
  // defining a new promise
  const data = true;
  if (data) {
    console.log("fetching data...");
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  } else {
    reject("An error occured..");
  }
});

let newImg = new Promise((resolve, reject) => {
  // defining the 2nd promise ..
  let imageLoad = true;
  if (imageLoad) {
    console.log("Loading image..");
    setTimeout(() => {
      resolve("Image loaded");
    }, 1500);
  } else {
    reject("cannot load the image");
  }
});
// promise
//   .then((result1) => { //if promise 1st will sucess
//     console.log(result1);
//     return newImg; //than it returns the next promise for checking
//   })
//   .then((result2) => {
//     console.log(result2); // if next promise is also sucessfull than the
//   })
//   .catch((error) => {
//     console.error(error); //catch block will not be executed
//   });

// instead of this we can also use Promise.all[] to check multiple promise it works like the same as traditional method but with easier syntax..

Promise.any([promise, newImg]); //if any promise wins/resolve then it will return that and the other promises will terminated..
Promise.race([promise, newImg]); //return the first promise even if it is rejected or resolved
Promise.allSettled([promise, newImg]); //return the only those promises which is resolved not other
Promise.all([promise, newImg]) //return all promises one by one
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
// it return the result in the form of array but as you can see this syntax is much easier to understand ...
