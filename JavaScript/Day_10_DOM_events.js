//exercise 1 : create three divs with same class name and give them unique properties using JS.

//let allDiv = document.querySelectorAll(".box");
//console.log(allDiv);
//allDiv[0].textContent = " First box";
//allDiv[1].textContent = "Second box";
//allDiv[2].textContent = "Third box";

//exercise 2 :create a h2 tag with text "Hello JavaScript" and append "from apna college" in it using JS.

//let heading = document.querySelector("h2");
//heading.textContent = heading.textContent + " from apna college" ;

//getattribute : a getAttribute is a used in DOM to get the attribute value for example we want to know about the id name of a specific tag we can easily get it .
//let getAttr = document.querySelector("div");
//console.log(getAttr.getAttribute("class")); // output : box

//let pass = document.querySelector("input");
//console.log(pass.getAttribute("type")); //output:password

//setattribute :it is use to add or update the existing attribut we first define name of the attribute and then we define the updated or new info realted to the attribute .
//let divs = document.querySelector("div");
//console.log(divs.getAttribute("class"));
//divs.setAttribute("class" ,"dabba"); // update the class from box to dabba .
//divs.setAttribute("id" ,"box");
//console.log(divs.getAttribute("id"));

//node.style : it is used to gives style to our HTML elements in JS :

// let divs = document.querySelectorAll("div");
// divs.forEach((div) => {
//   div.style.backgroundColor = "blue";
//   div.style.margin = "25px";
// });

// let newEle = document.createElement("button"); //creating a new button element using crateElement 
// newEle.innerText = "Click me"; //giving inner text
// let selectedEle = document.querySelector("body");
// selectedEle.prepend(newEle); // add the element at the starting;

// newEle.style.backgroundColor = "red";
// newEle.style.color = "white";
// selectedEle.append(newEle); //add it at last of the slected element .
// selectedEle.before(newEle); // before the selected element;
// selectedEle.after(newEle); //after the element.
// selectedEle.remove(); //remove the selected elemnt

// let cls = document.createElement("p");
// cls.innerText = "hi this is a paragraph"
// cls.setAttribute("class", "newClass")

// let bdy = document.querySelector("body");
// bdy.prepend(cls);

