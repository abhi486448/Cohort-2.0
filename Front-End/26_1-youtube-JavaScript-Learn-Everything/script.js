// "data types"
// data ke type

  // primitives -> aisi saari values jinko copy karne par tumhe real copy mil jaaye
  // string, number, boolean, null, undefined, symbol, bigint

  //reference -> inko copy karne par real copy nahi milegi but aapko refrence milega parent ka 
  // arrays, objects, functions
  // [] {} ()

// let a = [1,2,3];
// let b = a; // here copy of 'a' not given to 'b' only the refrance of 'a' is given to 'b' 
// b.pop(); // on removing one element from 'b'
// console.log(b);
// console.log(a); // it also removed from a itself

// string, number, boolean, null, undefined, symbol, symbol, bigint

  // '' - single quotes
  // "" - double quotes
  // `` - backticks
  // everything written under '', "", `` can be consider as string

  // 12 , 12.3 // are number

  // let a = true;
  // let b = false; // true , false are boolean

  // null ka matlab hai aapne jaan boojh kar koi value nahi di

  // undefined ka matlab ki aapne ek variable nanaya aur usey value nahi di to jo value by default mili wo hai undefined

  // symbol -> unique immutable value
  // future mein hum koi libraries use karege ab is case mein un librarues mein kai baar kuchh fields hoti hai jinse similar hum bhi banaa dete hai aur galti se humaari banaai hui fields us library ki original fields ko change kar deta hai
//   let sheryjs = { //let's asume we are using a library sheryjs
//     uid: 12,
//     model: "harsh"
//   }
//   sheryjs.uid = 1; // but we create a uid to uniqely identify it which was alredy there in sheryjs so it will overwrite it
//   console.log(sheryjs.uid);
  
//   let obj = {
//     uid: 1,
//     name: "harsh",
//     age: 12,
//     email: "test@test.com",
//   };

//   let u1 = Symbol("uid");
//   obj[u1] = "001";
//   console.log(obj); // here both are uid but are  unique

  //let a = Number.MAX_SAFE_INTEGER; // that is the max value of no. that can hold by number
  //console.log(a);
  //a = a + 12
  //console.log(a);

  //let b = 9007199254740991n; // if we use 'n' at the last of any number it will become bigint that can hold values more then 9007199254740991;
  //console.log(b);
  //b = b + 12n; 
  //console.log(b);

// arrays, object, function

// Dynamic typing -> js main static typing nahi hai and yaha par hai dynamic typing jiska matlab hai aap data ko change kr skte ho kyuki yaha par dynamic data type hai
  //let a = 12;
  //a = true;
  //a = "harsh";
  //a = [];
  //a = null;
  //a = undefined;

// typeof quirks (e.g., typeof null === 'object' )
  //console.log(typeof 12);
  //console.log(typeof "harsh");
  //console.log(typeof null);
  //console.log(typeof NaN);
  //console.log(NaN === NaN);
  //console.log(.1 + .4);
  //console.log(.1 + .2);

// Type coercion (== vs ===)

  // type coercion -> concept jismein aapka ek type authomatically convert hojaayega
  //console.log("5" + 1); // 51 concatinate kar diya because '+' can add or concatinate
  //but 
  //console.log("5" - 1); // 4 this have only one option that is substract

// Truthy vs falsy values
  
  //(0 false "" null undefined NaN document.all) -> these all have "false" nature
  
  //console.log(!!0);
  //console.log(!!false);
  //console.log(!!"");
  //console.log(!!null);
  //console.log(!!undefined);
  //console.log(!!NaN);
  //console.log(!!document.all);
  
  // rest all -> true
  //console.log(!!-1);
  
