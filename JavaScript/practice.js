// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const fetchingData = Math.random() > 0.5;
//     if (fetchingData) {
//       resolve("fetching data");
//     } else {
//       reject("fetching data is unsuessful..");
//     }
//   }, 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const processingData = Math.random() > 0.5;
//     if (processingData) {
//       resolve("Data processed");
//     } else {
//       reject("Failed to process data..");
//     }
//   }, 3000);
// });

/* promise
  .then((result) => {
    console.log(result);
    return promise2;
  })
  .then((result) => {
    console.log(result);
  })

  .catch((error) => {
    console.error(error);
  });
console.log(promise); */

/* Promise.all([promise, promise2]).then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error)
}) */

async function fetchData() {
  console.log("Fetching data...");
  try {
    const promise = await new Promise((resolve, reject) => {
      const data = Math.random() > 0.5;
      if (data) {
      resolve("Data fetched sucessfully")
      } else {
        reject("Failed to fetch data ")
    }
    })
    console.log(promise);
  } catch (error) {
    console.error(error);
  }
}

async function processImg() {
  console.log("Processing the image..");
  try {
    const imgProcess = Math.random() > 0.5;
    const promise = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (imgProcess) {
          resolve("Image processing sucessful");
        } else {
          reject("Failed to process the image")
        }
      }, 2000);
    })
    console.log(promise);
  } catch (error) {
    console.error(error);
  }
}
