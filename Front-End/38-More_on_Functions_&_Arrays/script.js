// - More Functions in JavaScript - [`Anonymous`, `Higher Order`, `Callback`, `Pure Function`, `First Class`, `Pure Function`, `Impure Function`]

// Pure Function -> ek aisa function
// same input = same output
// koi side effect nahi hoga
// let a = 12;
// function abcd(val){
//     console.log(val+2);
// }
// abcd(a);
// abcd(a);
// abcd(a);
// abcd(a);

// Impure Function
// same unput = different o/p ho skta hai
// koi na koi side effect ho skta hai
// let a = 12;
// function abcd(val){
//     console.log(Number(Math.random())*10 + val);
// }
// abcd(a);
// abcd(a);
// abcd(a);
// abcd(a);

// - UNderstanding Scoping in JS - [`Global scope`, `Function scope`]
// let a  = 12; // global scope
// function abcd(){
//     let b = 134; // function scope
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);

// - Understanding `Closures`, `Scoping Rule`

// closure -> ek function hai jo return karta hai function but returning function jo hai wo parent fnc ka koi variable use karega
// function abcd(){
//     let a = 12;
//     return function(){
//         console.log(a);
//     }
// }

// Arrays ->
// let arr = [342, 654, 878, 567, 4565, 465];
// console.log(arr[5]);

// - What is arrays in JavaScript and how to Create an Array.
// array is tha collection of on or more then one values
//create array
// let arr = [];
// //or
// let arr2 = new Array();

//  -  Understand How to Accessing Elements in Array.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[4]);

// - Functions on Arrays - [`push`, `shift`, `unsift`, `indexOf`, `array destructuring`, `filter`, `some`, `map`, `reduce`, `spread operator`, `slice`, `reverse`, `sort`, `loin`, `toString`]

// push
// let arr = [1,2,3,4,5];
// arr.push(6);
// console.log(arr);

// pop
// let arr = [1,2,3,4,5];
// arr.pop();
// console.log(arr);

// shift
// let arr = [1,2,3,4,5];
// arr.shift(0); // remove first element of arr
// console.log(arr);

// unshift
// let arr = [1,2,3,4,5];
// arr.unshift(0); // add element at start
// console.log(arr);

// indexOf
// let arr = [1,2,3,4,5];
// console.log(arr.indexOf(3)); // show index of value

// array destructuring
// let arr = [1, 2, 3, 4];
// let [a, , b] = arr;
// console.log(a,b);

// - Itrating Over Arrays using - [`forEach`]
// let arr = [1,2,3,4];
// arr.forEach(function (val){
//     console.log(val);
// })

// create object
// let obj = {
//     name: "harsh",
//     age: 23,
// }
// //or
// let obj2 = new Object();
// console.log(obj);
// console.log(obj2);

// access obj
// let obj = {
//     name: "harsh",
//     age: 23,
// }
// console.log(obj.name);
// //or
// console.log(obj['age']);
// // delete
// delete obj.age;
// console.log(obj)