// Arthimetic, comparison, logical, assignment, unarg, ternary

    // + - * / % **
    // ** = exponentiation
    // 2 ** 3 = 2³ = 8

    // = == ===
    // 12 == 13 //false
    // 12 == "12" //true
    // 12 === "12" //false

    // < > <= >= ! != !== !!
    // 12 != 13 //true
    // 12 != "12" //false
    // 12 !== "12" //true
    //!!12 //help to find nature of that value true or false

    // && || !

    //unary operater
    // + - ++ -- typeof instanceof
    //console.log(+"10"); // if we use '+' before any string that can chaned to number then it will conver to a number
    //console.log(+"harsh"); // but is we use '+' before any string which can not convert to number that will convert to a NaN

    // ?: // ternary
    // condition ? true : false // template
    // console.log(12>13 ? true : false); //false

    //typeof // help to find type of that value
    // console.log(typeof null); //object 
    // console.log(typeof []); //object
    // console.log(typeof {}); //object
    // console.log(typeof function(){}); //function
    // console.log(typeof NaN); // number 

    // instance
    // that value instanceof its_type //template
    // let a = [];
    // console.log(a instanceof Array); //true // matlab kya a array hai that is yes
    // let b = {};
    // console.log(b instanceof Object); // true // matlab kya b object hai that is yes
    // let c = 12;
    // console.log(c instanceof Number); // it only work for refrenced values like array , object etc

    // let score = 25;
    // let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "False" ;
    // console.log(grade); // false

    // let points = 120;
    // let status = points > 100 ? "Gold" : points > 50 ? "Silver" : "Bronze";
    // console.log(status); //gold

    // let loggedIn = true;
    // let hasToken = false;
    // let access = loggedIn && hasToken ? "Allow" : "Deny";
    // console.log(access); //deny

    // let n = 5;
    // let result = n++ + ++n; //5 + 7
    // console.log(result); //12

    // let count = 5;
    // if (count-- ===5) {
    //     console.log("Matched"); //yes
    // } else {
    //     console.log("Not Mached");
    // }

// if else else-if
// switch case
// early return pattern

    // function getGrade(score){
    //     if (score < 33) return "Fail"
    //     else if (score < 60) return "D"
    //     else if (score < 70) return "C"
    //     else if (score < 80) return "B"
    //     else if (score < 90) return "A"
    //     else if (score <= 100) return "A+"
    //     else return "Invalid marks ❌"
    // }
    // console.log(getGrade(344));

    // Rock-paper-scissors logic
    // function rpc(user, computer){
    //     if(user === "rock" && computer === "scissor") return "user win"
    //     else if (user === "scissor" && computer === "rock") return "computer win"

    //     else if (user === "scissor" && computer === "paper") return "user win"
    //     else if (user === "paper" && computer === "scissor") return "computer win"

    //     else if (user === "rock" && computer === "paper") return "computer win"
    //     else if (user === "paper" && computer === "rock") return "user win"
    // }
    //or
    // function rpc(user, computer){
    //     if(user === computer) return "Drow"

    //     else if(user === "rock" && computer === "scissor") return "user win"
    //     else if (user === "scissor" && computer === "paper") return "user win"
    //     else if (user === "paper" && computer === "rock") return "user win"

    //     else return "computer win"
    // }
    // console.log(rpc("rock", "scissor"));
    // console.log(rpc("scissor", "rock"));

// repeat karne ko loop kahate hai
// for while do-while forin foreach forof

    // kaha se jaana hai -> kaha tak jana hai -> kaise jaana hai
    //for
    // 1 - 40 // when we know the starting point and ending

    // kaka se jaana hai -> kab rukna hai -> kaise jaana hai
    //while
    //hello na aa jaye - while // condition fulfil na ho jaye

    // for-of ,forEach for array
    // for-in , Object.entries for object

    //print multiple of 5 till 50
    // for(let i = 1; i<=10; i++){
    //     console.log(`5 * ${i} = ${5*i}`);
    // }

    // print all number between 1 to 50 that are divisible by 3
    // for(let i = 1; i<=50; i++){
    //     if(i%3 === 0) console.log(i);
    // }

    // Stop at first multiple of 7
    // write a loop from 1 to 100 that:
    // print each number
    // for(let i = 1; i<=100; i++) {
    //     if(i%7 !== 0) {
    //         console.log(i);
    //     } else {
    //         break;
    //     }
    // }

    //console.log(Math.floor(34.54)); // remove value after '.'
    