// Date 25/March/2025 from today i finally start DOM manipulation and event handling : Today i learn Intro & selectors in DOM.

//A DOM is a tree like structure where tree is our whole document of HTML code and the Branches of the tree are our Elements/tags. And the inner content of those elements is like a fruit or leaves . DOM stands for document object model . The DOM is actually part of HTML we just use this word in JavaScript because we manipulate the DOM in Javascript . There is a thing like DOM which is called BOM it stands for browser obbject model . it is the whole browser window which as acess to our URL or loctaion or files history etc.and the windows is the combinaiton of DOM and BOM.

//So the first thing in DOM is to how to select DOM nodes or elements in JavaScript .There is bunch of selectors available in JS :

//1: getElementById : select the element by ID name
// let example = document.getElementById("Soft-skills");
// console.log(example.innerHTML);

//2: getElementByClassName : select element by class name

//3: getElementByTagName : select element by tag name

//4: querySelector : it is used to call all type of element like we can call a element by tag name ,we can use #idname to call that element by Id name or we can use .classname to call an element by class name .if we call queryselector by tag name or class name it select the first element from document for example suppose we have 5 <p> tags queryselector select first paragraph tag .

//5: querySelectorAll : it select all the elemnt related with same tag name or classname .

//Traversing thorugh elemnts :
//1. parentElement/children 
// let example = document.getElementById("child");
// console.log(example.parentElement); // return the parent element if no parent exist it return null like <html> .
// console.log(example.children); // return if any children exist 

//2. first and last child
let example = document.getElementById("child");
console.log(example.firstChild);//return first child
console.log(example.lastChild);//return last child








