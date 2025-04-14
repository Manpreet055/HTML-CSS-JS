// //code  of creating Data
// const form = document.querySelector("form");
// const message = document.getElementById("message");
// form.addEventListener("submit", async (event) => {
//   event.preventDefault();
//   const formData = {
//     //creating formData to javaScript object to convert it into
//     //JSON format later
//     userName: form.username.value,
//     email: form.email.value,
//     mobile: form.mobile_number.value,
//   };

//   try {
//     let getUserData = JSON.parse(localStorage.getItem("user")); // getting user data from localStorage
//     if (getUserData && getUserData.userName === formData.userName) {
//       message.style.display = "block";
//       message.textContent = "user already exist..";
//       setTimeout(() => {
//         message.style.display = "none";
//       }, 2500);
//       return;
//       // if the username entered by the user already exist in localStorage aka
//       //backend in future.then i will going to print user already exist...
//     } else {
//       message.style.display = "block";
//       message.textContent = "User created successfully !!";
//       setTimeout(() => {
//         message.style.display = "none";
//       }, 2500);
//     }
//     //fetching fake API to post data using POST method with headers (JSON file)
//     let sendData = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(formData), // converting Data into JSON string
//     });
//     let data = await sendData.json(); // converting Data into json format
//     localStorage.setItem("user", JSON.stringify(data)); // the conditon we define
//     //earlier if the user already exist then throgh error .. if not then add the new user ..
//     form.reset();
//   } catch (err) {
//     console.error(err); //It will throw error which we define earlier .. in if block
//   }
// });

// //Now we use axios to preform same operation

// let form = document.querySelector("form");
// form.addEventListener("submit", async (event) => {
//   event.preventDefault();
//   let formData = {
//     username: form.username.value,
//     email: form.email.value,
//     mobile: form.mobile_number.value,
//   };
//   try {
//     let response = await axios.post(
//       "https://jsonplaceholder.typicode.com/posts",
//       formData
//     );
//     console.log(response.data);
//   } catch (err) {
//     console.error(err);
//   }
// });


//Concept of pagination in JS : this concept is used when we have so many lines of content for our webpage,pagination technique allow us to divide that content into diffrent pages ad user give a button to click on it so he can go through whole contents without trapped inside infinte scroll..

//getting user data using get method(by default)
// async function getData(userID) {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!response.ok) {
//             throw new Error("Something went wrong..")
//         }
//         let data = await response.json();
//         console.log(data[userID]?.name ?? "Not define");
//     } catch (error) {
//         console.error(error);
//     }
// }

// getData();