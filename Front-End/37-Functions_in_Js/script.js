// Function in JavaScript

    // - Understand Function in JavaScript and why it is widely used - [`parameters`, `arguments`, `rest parameters`, `hoisting`, `Variable Hosting`, `Function Hoisting`]

    // function abcd(age, name){
    //     // parameters
    // }
    // abcd(12, "Abhishek")
    // // arguments

    // rest parameters
    // function abcd(a, b, ...c){
    //     console.log(a, b, c);
    // }
    // abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    // hoisting
    // console.log(a); // use before defining
    // var a = 12; // no erroe only undefined in var
    // console.log(b);
    // let b = 12; // erroe can not use before initilization

    // Varuable Hoistion
    // console.log(a);
    // var a = function(){
    //     return 23;
    // } // if we try to create function with varaible te still give same results as in varaibles

    // Function Hoisting
    // abcd(); // in function we can call function even before inilislizing it
    // function abcd(){
    //     console.log("Hello");
    // } // it won't going to show any erroe or undefined

    // - Parameters in JavaScript - [`required`, `destructured`, `rest`, `default`]

    // required
    // function abcd(a, b, c, d){
    //     // agar hamne function a parameters banaye hai aur unko arguments nahi diya hai tab vo undefined ho jaye ge
    // }
    // abcd(); // no arguments

    // destructured
    // function abcd({ name, age}){
    //     console.log(name, age); // insted of obj.name we can use it by it name directly with the help of destructred
    // }
    // abcd({ name: "Abhishek", age: 23})

    // rest
    // function abcd(...val){
    //     console.log(val);
    // }
    // abcd(1, 2, 3, 4);

    // default
    // function abcd(a=10, b=5, c=13){
    //     console.log(a, b, c);
    // }
    // abcd(100, 2); // if we don't give arguments then it will use default values

    // - Arguments in JavaScript - [`positional`, `default`, `spread`]

    // positional
    // function abcd(a, b, c){
    //     console.log(a, b, c);
    // }
    // abcd(1, 2, 3); // every argument has to be in their position

    // default - already descused above

    //spread
    // function abcd(a, b, c, d){
    //     console.log(a, b, c, d);
    // }
    // let arr = [1, 2, 3, 4];
    // abcd(...arr);

    // - `Classic Function`,`Nested Function` (function within function), `Scope Chain` in Javascript.

    // Classic Function
    // function abcd(){

    // }
    // abcd();

    // Nested Function
    // function abcd(){
    //     function defg(){

    //     }
    //     defg();
    // }
    // abcd();

    // Scope Chain
    // let a = 12; // Global scope can used anywhere in the code
    // function abcd(){
    //     let b = 13; // function scope can used anywhere in the function
    //     function defg(){
    //         console.log(b);
    //     }
    //     defg();
    // }
    // abcd();

    // - Understanding Immediately Invoked Function Expression (IIFE).
    // let balance = 2000; // i can be access and manupulated by console 
    // (function(){
    //     let balance2 = 2000; // but it can not access and manupulated by console because it is private varaible created inside iife
    // })();

    // 13. Functions in JavaScript
    // - More Function in JavaScript - [`Arrow Function` , `Fat Arrow` , `Anonyous` , `Higher Order` , `Callback` , `First Class` , `Pure Function` , `Impire Function`]

    // Fat Arrow or Arrow Function
    // let fnc = () => {
    //     console.log("HeyHeyHey");
    // };
    // fnc();

    // Anonyous function -> function without name
    // function(){

    // };

    // Higher Order
    // hof -> ek aisa fnc jo ki return karde ek aur function
    // wo fnc accept karle ek aur fnc parameter mein
    // function abcd(){ // it is hof
    //     return function(){

    //     }
    // } 
    //or
    // function abcd(a){ 

    // };
    // abcd(function(){

    // });

    // Callback
    // function abcd(a){

    // }
    // abcd(function(){

    // }) // function which is given as argument is known as Callback

    // first class function
    // fcf ek concept hai -> function us language mein variable ki trah use ho sakte hai
    // let abcd = function(){

    // }
    //or
    // function abcd(a,b){

    // }
    // abcd(function(){

    // },23);

    
