// arrays

// let arr = [1,2,3,4];
// for(let i = 0; i<4; i++) {
//     console.log(arr[i]);
// }

// let marks = [10, 20, 30, 40];
// console.log(marks[5]); //if we try to print value that don't exist in array then it will print undefined

// other way to create an array

// let arr = new Array(1,2,3,4);
// for(let i = 0; i<4; i++) {
//     console.log(arr[i]);
// }

// modify arrays

// let arr = [1, 2, 3, 4];
// arr[2] = 12;
// console.log(arr);

// Array methods:

//  push
// let arr = [1, 2, 3, 4];
// arr.push(7000);
// console.log(arr); // 7000 will be added to the arr at the end of it

//  pop
// let arr = [1, 2, 3, 4];
// arr.pop();
// console.log(arr); // last element of arr will be removed

//  shift
// let arr = [1, 2, 3, 4];
// arr.shift();
// console.log(arr); // first element of arr will be removed

//  unshift
// let arr = [1, 2, 3, 4];
// arr.unshift(0);
// console.log(arr); // add element at the starting of the arr

//  splice
// let arr = [1,2,3,4,5];
// arr.splice(2,1); // it take first value index of that array and second value number of element to remove
// console.log(arr); // it remove element from array from the given index to the number of element

//  slice
// let arr = [1,2,3,4,5];
// let newarr = arr.slice(0, 4); // first value is index and second is number of element
// console.log(arr, newarr); // slice does not make any changes in tha main array arr insted it slice that part from that arr to newarr

// reverse
// let arr = [1,2,3,4,5];
// arr.reverse();
// console.log(arr); // it just reverse the array;

//  sort
// let arr = [23, 53, 12, 5, 67];
// let sr = arr.sort(function(a, b){
//     return a - b; // a-b will sort it in assending order, but b-a sort it in dissending order
// });
// console.log(sr); // it help to sort array in assending or dessending order

//  forEach
// let arr = [11, 62, 3, 4, 25];
// arr.forEach(function (val) {
//     console.log(val+3);
// }); // forEach run one time for every element and we can do anything in that

//  map
// let arr = [11, 62, 3, 4, 25];
// // map sirf tab use karna hai jab aapko ek naya array bababa hai pichhle array ke data ke basis par
// // map dikhte ke saath man mein ek blank array bana liya karo
// let newarr = arr.map(function(val){
//     // return 12; // map return for every element of arr to newarr and we can return any thing else than that element itself
//     // if we return nothing then it will return 'undefined' for every element

//     if(val > 10) return 12;
// });
// console.log(newarr);
// // jab bhi aapko aisa case dikh jaaye jaha par ek array se naya array banega and wo naya array kuchh values ko rakhega tab map lagega

//  filter
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let newarr = arr.filter(function(val){
//     if(val > 4) return true; // if we return true then only those values are going to the newarr
//     // if we return false then those values are not going to pas to newarr
// });
// console.log(newarr);

//  reduce
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let ans = arr.reduce(function(accumulator, val) { // reduce take two argument one is "finction' and second is inital value of 'accumulator'
//     // accumulator is varable and val is the element of the arr
//     return accumulator + val;
// }, 0);
// console.log(ans); // reduce help to reduce arr in a singal element answer

//  find
// let arr = [
//     { id: 1, key: 1 },
//     { id: 2, key: 2 },
//     { id: 3, key: 1 },
// ]
// let va = arr.find(function(val){
//     return val.key === 1; // it will return the first object which contail key = 1 but which come first like id=1;
// });
// console.log(va); // we can use find to wind any thing in object with spasfic condition;

//  some 
// let arr = [10, 30, 32, 90];
// let any = arr.some(function(val){
//     return val>85; // if any means even singal val fulfull this condition then it return 'true' otherwise 'false'
// });
// console.log(any); // answer will be in boolian means true or false

//  every // it is just opposit to some 
// let arr = [10, 30, 32, 90];
// let eve = arr.every(function(val){
//     return val>20; // if every element of arr fulfull this condithon then it will return 'true'
//     // and even singal element do not fullful that condithin then return 'false'
// });
// console.log(eve); // answer will be in boolian means true or false


// Destructuring
// let arr = [1,2,3,4,5];
// let [a,b, , c] = arr;// here a,b,c will take values from 'arr' from 1 to 5 order if we want to skip any number we can use blank space in their place like 'a, ,c'
// console.log(a,b,c);

//  spread operator
// let arr = [1,2,3,4,5,6,7,8];
// let arr2 = [...arr]; // here all elements of arr will used and become a new arr and asin to arr2
// arr2.pop();
// console.log(arr); // here all elements will be visibal
// console.log(arr2);// but in this one element from last will be removed 
// // conclusion only element removed from arr2 not from arr means only coly of arr is passed to arr2


// Create an array with 3 fruits and print the second fruit.
// let fruits = ["apple", "banana", "orenge"];
// console.log(fruits[1]);

// Add "Mango" at the end and "Pineapple" at the beginning of this array;
// fruits.push("Mango"); // at last
// fruits.unshift("Pineapple"); // at begnning
// console.log(fruits);

// Replace "Banana" with "Kiwi" in the array ;
// let fruits = ["Apple", "Banana"];
// fruits.pop(); // remove Banana
// fruits.push("Kiwi"); // add Kiwi
// console.log(fruits);

// What's the difference between .push() and .unshift()?
// push add element at the end of the array but unshift add element at the nignning of the array

// Remove the last item from this array using a method;
// let number = [1, 2, 3, 4];
// number.pop();
// console.log(number);

// Insert  "Red" and "Blue" at index 1 in this array;
// let colors = ["Green", "Yellow"];
// colors.splice(1, 0, "Red", "Blue"); // initaly splace is used for removing but when we remove nithing and use extra values then it start adding element fron that place
// console.log(colors);

// Extract only the middle 3 elements from this array
// let items = [1,2,3,4,5,6];
// let re = items.slice(1,4);
// console.log(re);

// Sort this array alphabetically and then reverse it;
// let names = ["Zara", "Arjun", "Mira", "Bhavya"];
// let sr = names.sort(); // sort in alphabetically
// sr.reverse(); // reverce the array
// console.log(sr);

// Use ,map() to square each number
// let arr = [1, 2, 3, 4];
// let square = arr.map(function(val){
//     return val*val;
// });
// console.log(square);

// Use ,filter() to keep numbers greater then 10;
// let arr = [5, 12, 8, 20, 3];
// let newarr = arr.filter(function(val){
//     return (val>10);
// });
// console.log(newarr);

// Use .reduce() to find the sum of this array;
// let arr = [10, 20, 30];
// let result = arr.reduce(function(accumulator, val){
//     return accumulator + val;
// },0);
// console.log(result);

// Use .find() to get first number less than 10;
// let arr = [10, 30, 40 ,5, 200, 40];
// let res = arr.find(function(val){
//     return (val<10);
// });
// console.log(res);

// Use .some() to check if any student has scored below 35;
// let score = [45, 60, 28, 90];
// let result = score.some(function(val){
//     return val<35;
// });
// console.log(result);

// Use .every() to check if all numbers are even;
// let num = [10, 20, 8, 6];
// let res = num.every(function(val){
//     return (val%2 === 0);
// });
// console.log(res);

// Destructure this array to get firstName and lastName;
// let fullName = ["Abhishek", "Gupta"];
// let [firstName, lastName] = fullName;
// console.log(firstName, lastName);

// Merge two arrays using spred operator;
// let a = [1, 2];
// let b = [3, 4];
// let m = [...a, ...b];
// console.log(m);

// Add "India" to the start of this array using spread;
// let countries = ["USA", "UK"];
// countries = ["India", ...countries];
// console.log(countries);

// Clone this array properly (not by reference);
// let arr = [1, 2, 3];
// let newarr = [...arr];
// newarr.pop();
// console.log(arr);
// console.log(newarr);