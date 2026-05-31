// 1. prototype

// class Sketch {
//     constructor(){
//         this.character = "doremon";
//         this.color = "blue";
//         this.someFnc = function(){};
//     }

//     speak(){}
//     walk(){}
// }

// let sketch1 = new Sketch();
// here someFnc is function which is given to sketch1 my constructor and it is it's one if we create another object then it will have it's one someFnc
// but speak() and walk() are prototype function so they will we shared by every object


// 2. this

// this ek specal keyword hota hai

// console.log(this);
// window

// function abcd(){
//     console.log(this);
// }
// abcd()
// window

// let obj = {
//     name: "harsh",
//     fnc : function(){
//         console.log(this);
//     }
// }
// obj.fnc()
// obj

// let obj1 = {
//     name: "rana",
//     fnc: function(){
//         function abcd(){
//             console.log(this);
//         }
//         abcd()
//     }
// }
// obj1.fnc()
// window

// let obj2 = {
//     name: "rana",
//     fnc: function(){
//         let abcd = ()=>{
//             console.log(this);
//         }
//         abcd()
//     }
// }
// obj2.fnc()
// obj2

// global -> window
// function -> window
// es5 function inside object -> object
// es6 function inside object -> window
// es5 function inside es5 function inside object -> window
// es6 function inside es5 function inside object -> object

// 3. call apply bind

// ek function mein this ki value window hoti hai, agar aap chaahte ho ki wo value window naa ho par koi aur object ho tab aap use kr skte ho call apply bind ka

// call

// let obj = {
//     name: "harsh",
// }

// function abcd(a, b, c){
//     console.log(this, a, b, c);
// }
// abcd.call(obj, 4, 5, 6);

// apply

// let obj = {
//     name: "harsh",
// }

// function abcd(a, b, c){
//     console.log(this, a, b, c);
// }
// abcd.apply(obj, [4, 5, 6] );

// bind

let obj = {
    name: "harsh",
}

function abcd(a, b, c){
    console.log(this, a, b, c);
}
let fnc = abcd.bind(obj, 4, 5, 6 );

fnc();