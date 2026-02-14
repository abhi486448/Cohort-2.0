// arrays ->
// - Functions on Arrays - [`push`, `pop`, `shift`, `unsift`, `infexOf`, `array destructuring`, `filter`, `some`, `map`, `reduce`, `spread operator`, `slice`, `reverse`, `sort`, `join`, `toString` ]

// - Recognise How Objects Are Stored, Traverse Keys of an Object, Array as Object.
    // {
    //     name: "harsh",
    //     age: 27,
    // } // way to store object

// - Timing Events - `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`
// - Operation in Objects - [`freeze`, `seal`, `destruturing`, `object methords`, `this keyword`]

// Questions
//Q.1 write a function sayHello() that prints "Hello JavaScript".
    // function sayHello(){
    //     console.log("Hello JavaScript");
    // }
    // sayHello();

//Q.2 Create a function add(a, b) that returns their sum and log the result.
    // function add(a, b){
    //     return a + b;
    // }
    // console.log(add(2, 5));

// Q.3 write a function with a default parameter name = "Guest" that print "Hi <name>".
    // function Hiname(name = "Guest"){
    //     console.log(`Hi ${name}`);
    // }
    // Hiname();

// Q.4 Use rest parameters to make a function that adds unlimeted numbers.
    // function add(...arr){
    //     // let count = 0
    //     // arr.forEach(element => {
    //     //     count+=element;
    //     // });
    //     // console.log(count);

    //     //or

    //     let ans = arr.reduce(function (acc, val){
    //         return acc + val;
    //     }, 0);
    //     console.log(ans);
    // }
    // add(1, 2, 3, 4 , 45, 56);

// Q.5 Create an IIFE that prints "I run Instantly"
    // (function(){
    //     console.log("I run instantly")
    // })();

// Q.6 Make a nested function where the inner one prints a varable from the outer one.
    // function abcd(){
    //     let a = 20;
    //     function dd(){
    //         console.log(a);
    //     }
    //     dd();
    // }
    // abcd();

// Q.7 Create an array of fruits. Add one at the end and remove one frome the begnning.
    // let fruits = ["apple", "graps", "banana", "orange", "mango"];
    // fruits.push("gawava");
    // fruits.shift();
    // console.log(fruits);

// Q.8 Use a for loop to print all elements of an array.
    // let arr = [1,2,3,4,5,6,7,8,9,10];
    // for(let i=0; i<arr.length; i++){
    //     console.log(arr[i]);
    // }

// Q.9 Create an onject person with keys name, age, and city, and print each key's value.
    // let user = {
    //     name: "abhishek",
    //     age: 22,
    //     city: "Rewa",
    // }
    // for(let key in user){
    //     console.log(key, user[key]);
    // }

// Q.10 Use setTimeout() to log "Time's up!" after 2 seconds.
    // setTimeout(()=>{
    //     console.log("Time's up!")
    // }, 2000);