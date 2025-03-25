// Date 13/march/2025  //Today i learned about operators

//Operator & Types of operators in JavaScript.
// An Operator is used to perform operation on a operand.

//      Assignment operator:
//              Assignment operators are used to assign a value to a varaiable.
//                  : = (Assignment operator)
//              Example: let myAge = 22 ; "=" is an assignment operator.it is the only assignment operator.
//      

//      Arithmatic operator:
//              Arithmatic operators are used to perform mathematical operations on operands.
//              These operator are:
//                  : + (Addition)
//                  : - (Substract)
//                  : * (Multiply)
//                  : / (Divide)
//                  : % (modulus)
let x = 10;
let y = 10;
console.log(x + y); //Same as others
let sum = 0.1 + 0.2;
console.log(sum.toFixed(3));

//      Comparison Operator:
//              Comparison operator are used to compare two or more values.
//              These Operator are:
//                  : == (Equal to)
//                  : === (Strict equal to )
//                  : < (Greater than)
//                  : > (Less than)
//                  : <= (Greater than or equal to)
//                  : >= (Less than or equal to)
console.log(5 == 5); //True
console.log("5" == 5); //if we are using double equals to it will say true because it will not check the data type but using triple equals to we got false because it will check the value datatype.
console.log("5" === 5);
console.log(5 >= 10); // False 
console.log(5 <= 10); // True

//      Logical Operator:
//              Logical Operator are :
//                  : AND (&&) True if both values are true
//                  : OR (||)  True if one values are true
//                  : NOT (!)  True if both values are false 
let Age = 19;
let hasLicense = true;
console.log(Age >=18 && hasLicense) //true 

//      Unary Operator:
//                   : + : Used for typecasting
//                   : - : Same Same but diffrent but still same 
//                   : ++ : Increment operator Example :
let z = 5;
console.log(z++); // represent first and then increment (Iska matlab samjhe daya)
console.log(z++);    
console.log(z++);    
console.log(z++);    
console.log(z++);    
//                   : -- : same as increment but it decrease the value after represent 

//      Ternary Opeartor:
//              Ternary operators are used to give condition in one line just like python single line if else statement.Syntax:
//          condition ? ifconditontrue : ifconditionfalse:
let myAge = 18;
let result = myAge >= 20 ? "You are an adult" : "You are an Teenager";
console.log(result) // output : You are an Teenager

// Some Practice questions
console.log(5<12<5) // Output will be true because 5<12==true and true == 1,now 1<5 ?? answer is true   
console.log("20" + 10 + 10) // output will be 201010 beacause "20" + 10 == "2010", now "2010"+10 obivously 201010

