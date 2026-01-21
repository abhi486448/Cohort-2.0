// var - es5
// let, const -es6

//a = 12 // This will work but it is not recommended to use

// var a; // declare karna
// var a = 12; //declare and initialize

// var a = 12;
// window mein add hota hai
// function scoped hota hai
// aap firse declare kr skte ho same name se and error nahi aayega 

// var a = 12;
// var a = 21; //Thid will not throw any error
// let a = 12;
// let a = 21; // But it will throw error

// Temporal Dead Zone
// tdz - utna area jitne mein js ko pata to hai variable exist karta hai par wo aapko value nahi de sakta
// console.log(a);
// let a = 12; 
// It should throw error "a is not defined at script.js:21:13" But it throw "Cannot access 'a' before initialization at script.js:21:13"
// It hapen with let and const only
// but with var it show "undefined"

// Hoisiting impact per type
// hoisting  -> ek variable ko jab js mein banaate hai to wo variable do hisso mein toot jaata hai and uska declare part upar chala jaata hai and uska initialization part neeche reh jaya hai
// console.log(a);
// var a = 12;
// now it become
// var a = undefined; // This will go to the top of code
// a = 12; // this remain at its place
// And that is why we get "undefined with var"

// if (true) {
//     var a = 1;
//     let b = 2; 
// }
// console.log(a); //👍 1
// console.log(b); //❌ not defined

// const person = { name: "Harsh" };
// person.name = "Sharma"; // 👍 allpwed
// person = {}; // ❌ not allowed

// const person = {
//     name: "Abhishek",
//     age: 22,
//     city: "Jabalpur"
// }
// Object.freeze(person); // This help to freeze values so that it can't be changed
// person.name = "Rohan";
// person.age = 25;
// person.city = "Rewa";
// console.log(person);