// Q.12 - Ask user for words until they type “stop”. Count how many times they typed “yes”
// let ask = prompt("Say Something: ");
// let count = 0;
// while(ask !== "stop"){
//     if(ask === "yes"){
//         count++;
//     }
//     ask = prompt("Say Something: ");
// }
// console.log(`Total no. of yes: ${count}`);

// Q.13 - Print numbers divisible by 7 from 1 to 50
// for(let i=1; i<=50; i++){
//     if(i%7 === 0){
//         console.log(i);
//     }
// }

// Q.14 - Sum of all odd numbers from 1 to 30
// let sum = 0;
// for(let i=1; i<=30; i++){
//     if(i%2 !== 0){
//         sum+=i;
//     }
// }
// console.log(`Total sum: ${sum}`);

// Q.15 - Keep asking number until user enters an even number
// let num = +prompt("Enter number: ");
// while(num%2 !== 0){
//     num = +prompt("Enter number: ");
// }

// Q.16 - Print numbers between two user inputs
// let num1 = +prompt("Enter 1st number: ");
// let num2 = +prompt("Enter 1st number: ");
// if(num1>num2) console.error("first no. can not be bigger then last no.")
// for(let i=num1+1; i<num2; i++){
//     console.log(i);
// }

// Q.17 - Print only first 3 odd numbers from 1 to 20
// let count = 0;
// for(let i=1; i<=20; i++){
//     if(count<3){
//         if(i%2 !== 0 ){
//             console.log(i);
//             count++;
//         }
//     } else {
//         break;
//     }
// }

// Q.18 - Ask user 5 numbers. Count how many are positive
// let arr= [ 0, 0, 0, 0, 0];
// let count = 0;
// for(let i=0; i<5; i++){
//     arr[i] = Number(prompt("Enter number: "));
//     if(arr[i]>=0) count++;
// }
// console.log(`No. of positive no.: ${count}`);

// Q.19 - ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”
let balance = 1000;
for (let i = 0; i <= 3; i++) {
    if (i < 3) {
        let withdraw = +prompt("Enter Amount to withdrawal: ");
        if (withdraw > balance) {
            console.error("Insufficient balance")
            break;
        } else {
            balance -= withdraw;
            console.log(`${withdraw} deducted from Account`);
        }
    } else {
        console.error("Exceed Tranjection Limit");
    }
}
