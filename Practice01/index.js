// // JavaScript console API
// console.log("Hello World");
// //alert("me");
// //document.write("this is documnent write")
// console.warn("this is console warning");
// console.error("This is an error");
// //console.clear();

//javascript variables
//containers to store information or data values

// var number = 24;
// var number2 = 56;
// console.log(number + number2);

// //numbers
// var num = 1;
// var num = 35;

// //strings
// var str1 = "This is a  string"; 
// var str2 = 'This is a  string';

// //objects
// var marks = {
//     ravi: 97,
//     ravi1: 9,
//     ravi2: 37
// }

// console.log(marks);


// //booleans
// var bool1 = true;
// var b = false;
// console.log(b);

// //undefined and nulls
// var un = undefined;
// console.log(un);

// var un1;
// console.log(un);

// var null1 = null;
// console.log(null1);

/*At very high level, there are two types of data types in java script.
1. Primitive Data Types: undefined, null , string, number, string, boolean, symbol  
2. Reference Data Types: Arrays and objects  
*/

//Array demostration
var arr = [1,2,3,4,"strings",5];
// console.log(arr[4]);

//Operators in javascipt
//Arthmatic operators
// var a = 34;
// var b = 56;
// console.log("The value of a + b is : ", a + b);
// console.log("The value of a - b is : ", a - b);
// console.log("The value of a * b is : ", a * b);
// console.log("The value of a / b is : ", a / b);

// Assignment operators
// = , != , += , -= , *=, /= 

//Comparison operators
// >= , <= , > , <, == ,  ......

//Logical Operators
//true , false , && , ||, Logical AND and OR Operagtors

//bitwise operator  "|"

//Logical not => !false , !true

//Operators apply on two or more operands, 3 and 2 are oprands and + is  operator.

//JavaScript functions , Provide reuseability.
//functions help us to implemennt Dry Principle , do not repeat yourself.
function avg(a, b){
    return (a+b)/2;
}
c1 = avg(6,4);
c2 = avg(14,16);
// console.log(c1, c2);


//Conditional or conditional statements in JavaScript
var age = 34;
// if (age > 8){
//     console.log("Your are not a kid.");
// }
// else{
//     console.log('Your are a kid.');
// }

// if (age > 18){
//     console.log("Your are not a kid.");
// }
// else if(age > 16){
//     console.log('Not a kid any more.')
// }
// else{
//     console.log('Your are a kid.');
// }

// console.log(arr);

// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// });

//While loop
let j = 0 ;


// while(j < arr.length){
//     console.log(arr[j]);
//     j++;
// }

// //do while loops
// do{
//     console.log(arr[j]);
//     j++;
// }
// while(j < arr.length)


//break and continue
// while(j < arr.length){
//     if(j == 2){
//         //break;
//         j++;
//         continue;
//     }
//         console.log(arr[j]);
//         j++;
//     }


//ARRAYS METHODS
// let myArr = ["Fan", "Camera", 34, null ,true];
// console.log(myArr.length);
// // myArr.pop();
// // myArr.push("shah");
// //myArr.shift()
// const newlen = myArr.unshift("shah");
// console.log (newlen);
// var aaa = myArr.toString();
// console.log (aaa);

// var aaa = myArr.sort();
// console.log (aaa);

// var dd = [1,3,24,3,2,6,76,4,4,33,3333,3333,444,322]
// var ee = dd.sort();
// console.log(ee);


//SRING METHODS IN JAVASCRIPT
// let myLovelyString = "Shah is a good boy... ";
// // console.log(myLovelyString.length);
// // console.log(myLovelyString.indexOf("Shah"));
// // console.log(myLovelyString.indexOf("good"));
// // console.log(myLovelyString.lastIndexOf("good"));
// console.log(myLovelyString.slice(1,10));
// console.log(myLovelyString.slice(1,4));
// //Replace string method
// d = myLovelyString.replace("Shah", "Shahnawaz");
// console.log(d, myLovelyString);

//JavaScript Dates
// myDate = new Date;
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

//document objects manipulation
// DOM Manipulation

// let elem  = document.getElementById('click');
// console.log(elem);

// let elemClass  = document.getElementsByClassName('container');
// console.log(elemClass);
// // elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// // elemClass[0].classList.remove("text-success");
// let inner = elemClass[0].innerHTML;
// let innerText = elemClass[0].innerText;
// console.log(innerText);

tn = document.getElementsByTagName('button');
tn1 = document.getElementsByTagName('div');
console.log(tn);
console.log(tn1);

createdElement = document.createElement('p');
createdElement.innerText = "This is a created paragraph.";
tn1[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold.";
tn1[0].replaceChild(createdElement2, createdElement);



