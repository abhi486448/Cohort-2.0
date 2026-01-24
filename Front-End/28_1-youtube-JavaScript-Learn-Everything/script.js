// what why how
// what is function
    // agar code likh duya to wo turant chal jaata hai
    // console.log("hey");

    // function dance(){
    //     console.log("dance");
    //     console.log("dance");
    //     console.log("dance");
    //     console.log("dance");
    //     console.log("dance");
    //     console.log("dance");
    // }
    // dance();
    // dance();
    // dance();
    // dance();

    // we can not named starting with number, symbal and keywards;

    //another way of using function
    // let fac = function(){
    //     console.log("heyheyhey")
    // }
    // fac();

    //function decleration

    // function abcd(){
    //     //function statement
    // }

    // let fnc = function(){
    //     //function expretion
    // }

    // () => {
    //     //fat arrow function
    // };

// Parameters Vs arguments

    // function dance(v1){
    //     console.log(`${v1} nach raha hai.`);
    // }
    // dance("ghoda");
    // dance("hiran");
    // dance("shyam");

    //               +- (Parameters)
    //               v
    // function add(v1, v2){
    //     console.log(v1 + v2);
    // }
    // add(1, 2);
    // add(11, 22);
    // add(111, 222);
    //         +- (argument)

    // function add(v1, v2){
    //     //console.log(v1 , v2); // undefined undefined
    //     console.log(v1 + v2); // NaN (not a number)
    // }
    // add();

// Default
    // function add(v1 = 0, v2 = 0){
    //     console.log(v1, v2); // default 0, 0
    // }
    // add();

//reast ' ... '

    // function abcd(...val){
    //     console.log(val);
    // }
    // abcd(1, 2, 3, 4, 5, 6, 7, 8);
    //jab argument bahot saare ho to humein utne hi parameter banaane padege, issey bachne ke liye , hum rest ka use karte hai .. agar .. function ke parameter space mein lage to wo rest operator hai and agar wo arrays and objects mein lage to wo spread operator hai
    
    // function abcd(a, b, c, ...val){
    //     console.log(a, b, c, val);
    // }
    // abcd(1,2,3,4,5,6,7,8,9);

//Return value and early return

    //return
    // function abcd(){
    //     return 12;
    // }
    // let val = abcd();
    // console.log(val);

    // early return
    // function abcd(){
    //     if(4==4){
    //         return 5;
    //     }
    //     return 10;
    // }
    // let val = abcd();
    // console.log(val);

    // first class -> function ko values ki tarah treat kar sakte hai
    // function abcd(val){
    //     val();
    // }
    // abcd(function(){
    //     console.log("hay");
    // });

// Higher order function -> wo function hota hai jo ki return kare function ya fir acceept kare ek function apne parameter mein
    //1.
    // function abcd(val){
        
    // }
    // abcd(function(){

    // });
    // //or
    // //2.
    // function abcd(){
    //     return function(){
    //         console.log("Hey")
    //     }
    // }
    // abcd()(); //two brackets to also run inner function

// pure vs impure functions

    // aise fnc jo ki baahar ki value ko naa badle wo hai pure fnc
    // let a = 12;
    // function abcd(){
    //     console.log("hay");
    // }
    // abcd();

    // aise fnc jo baahar ki value ko badal de wo hai impure fnc
    // let a = 12;
    // function abcd(){
    //     a++;
    // }
    // abcd();
    // console.log(a);

// Closures and lexical scoping

    // closures -> ek fnc jo return kare ek aur function aur return hone waala function humesha use karega parent fnc ka koi variable
    // function abcd(){
    //     let a = 12;
    //     return function(){
    //         console.log(a);
    //     }
    // }
    // abcd()();

    // lexical scoping
    // function abcd(){
    //     let a = 12; // a can be used anywhere under fnc abcd()
    //     function efgh(){
    //         let b = 13; // b can be used anywhere under fnc efgh()
    //         function ijkl(){
    //             let c = 14; // c can be used anywhere under fnc ijkl()
    //         }
    //     }
    // }

// IIFE (Immediately Invoked Function Expressions)

    // (function(){
    //     console.log("Hay");
    // })(); // this hunction run immediately

// Hoistion differences between declaration and expression

    // abcd(); // call function before its decleration
    // function abcd(){
    //     console.log("Heyheyhey");
    // } // this will work

    //but

    // abcd();
    // let abcd = function(){
    //     console.log("hayhay");
    // }; // this will not work

// Questions

    //1.convert this function to arrow function
    // function multiple(a, b){
    //     return a * b;
    // }
    // let a = multiple(1,2);
    // console.log(a);

    // let a = (a , b) => {
    //     return a * b;
    // }
    // console.log(a(1,2));

    //2. priduct output
    // function sayHi(name = "Guest"){
    //     console.log("Hi", name);
    // }
    // sayHi(); //hi Guest

    //3. Use rest parameter to accept any number of scores and return the total
    // function score(...val){
    //     // let total = 0;
    //     // for(let i = 0; i<val.length; i++){
    //     //     total+=val[i];
    //     // }
    //     // return total;

    //     //or

    //     let total = 0;
    //     val.forEach(function (no){
    //         total+=no;
    //     });
    //     return total;
    // }
    // console.log(score(1,2,3,4,5));

    //4. fix function with early return
    // function checkAge(age){
    //     if(age<18){
    //         console.log("Too young");
    //     } else {
    //         console.log("Allowed");
    //     } 
    // }

    // function checkAge(age){
    //     // if(age<18){
    //     //     return "Too young";
    //     // } else {
    //     //     return "Allowed";
    //     // } 

    //     //or

    //     if(age<18) return "Too young";
    //     return "Allowed";
        
    // }
    // let a = checkAge(10);
    // console.log(a);

    //5. what this function return
    // function f(){
    //     return;
    // }
    // console.log(f()); //undefined

    //6.
    // function abcd(val){
    //     val();
    // }
    // abcd(function(){
    //     console.log("Heyheyhey");
    // });

    //7. which is high-order function
    // [1,2,3].map(function(x){
    //     return x * 2;
    // }); //map is high order function

    //8. log ?
    // function outer(){
    //     let count = 0;
    //     return function (){
    //         count++;
    //         console.log(count);
    //     };
    // }
    // const counter = outer();
    // counter(); // 1
    // counter(); // 2


// write a BMI calculator
    
    // function bmi(weight, height){
    //     return weight/(height*height);
    // }
    // console.log(bmi(52, 1.6).toFixed(2));

// Create a reusable discount calculator (HOF)

    // function discount(dis, amount){
    //     let d = (dis/100)*amount;
    //     return function(){
    //         let total = amount - d;
    //         console.log(total);
    //     }
    // }
    // discount(20, 10)();

// create a pure function that transform value

    // function p(a){
    //     let b = a;
    //     b+=1;
    //     return b;
    // }
    // console.log(p(10));

// ise IFE to isolate verible

    // (function(){
    //     let count = 0;
    //     console.log(count);
    // })();
    // console.log(count); // count can not access
    


