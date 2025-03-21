// Date 21/March/2025 Today i learn OPPs in JS and some ES6+ concepts tommorow i will start lerning DOM manipulation and Event Handling ... .

// Object : An object is a collection of data in Key: value pair . we can declare ,multiple types of data inside a single object . no matter its is a floating value a string or a funntion . to access
let carObj = {
    brandName: "Ford",
    model : "Mustang GTD",
    year: 2025,
    color: "White",
    engine: 5.2,
    carState: () => {
        console.log('car start'); // we can also declare functions inside an object these function are called a method . 
    }
}
// console.log(carObj.brandName); // This is the traditional version of calling an object key (if the key is declared in double or single quotes Then the console throw Error)
// console.log(carObj["model"]); // This is the way to fetch the information from an object if the key of an object is define within the double quotes or single quotes ("").
// carObj.carState(); // calling the function of and object ....

// carObj.Year = 2049; //Updating the value of an object with traditional way .
// carObj["Year"] = 2049; // this a good way to do it.

// carObj.condition = "stock"; // Adding a new property
// carObj["wheels"] = "stock" ; // other Way

// delete carObj["wheels"]; // deleting an property

// console.log("year" in carObj); // check if a object has a property/Key ? // output will be :true 
// // console.log(carObj.hasOwnProperty("year")); // checking a property with hasOwnProperty Output : true 



// let car2Obj = { ...carObj }; //this is the way to create a shallow copy of an object .we can use "..." three dots to create a shallow copy of an object ..
// car2Obj.brandName = "Toyota";
// car2Obj.model = "Hilux";
// car2Obj.year = 2025; 
// car2Obj.color = "Black";
// car2Obj.engine = 3.0;
// car2Obj.engine = car2Obj.engine.toFixed(1);
// console.log(carObj);
// console.log(car2Obj);



// for (let key in carObj) {
//     console.log(key, ":", carObj[key]);
// }

