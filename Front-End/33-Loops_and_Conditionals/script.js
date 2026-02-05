// leval 1

    // Q.1 - print numbers from 1 to 10
    // for(let i=1; i<=10; i++){
    //     console.log(i);
    // }

    // Q.2 - print even no. from 1 to 20
    // for(let i = 1; i<=20; i++){
    //     if(i%2 === 0){
    //         console.log(i);
    //     }
    // }

    // Q.3 - print no. from 10 to 1
    // for(let i=10; i>=1; i--){
    //     console.log(i);
    // }

    // Q.4 - print 'yes' 5 times
    // for(let i=0; i<5; i++){
    //     console.log("yes");
    // }

    // Q.5 - print number is even or odd from 1 to 10
    // for(let i=1; i<11; i++){
    //     if(i%2 === 0){
    //         console.log(`${i} - is even`);
    //     } else {
    //         console.log(`${i} - is odd`");
    //     }
    // }

    // Q.6 - Ask user a number and say if it is positive or negative
    // let num = +prompt("your number: "); // prompt() always give a string to convert it to number we can use
    // //1 '+' before prompt
    // //2 parseInt("")
    // //3 number("") 
    // if(num>0){
    //     console.log(`${num} is positive number`);
    // } else {
    //     console.log(`${num} is negative number`);
    // }

    // Q.7 - Ask user age and say use is eligible for voting or not
    // let age = prompt("your age: ");
    // if(age === null){
    //     console.error("You cancelled it!")
    // } else {
    //     if(age.trim() === ""){ // trim() help to remove space but it does not remove spaces between the words or characters
    //         console.error("Please Enter Something:)")
    //     } else {
    //         age = Number(age.trim());
    //         if(isNaN(age)){
    //             console.error("Please Enter Valid Age");
    //         } else {
    //             if(age >= 18){
    //                 console.log("You Eligible For Voting");
    //             } else {
    //                 console.log("You not Eligible For Voting");
    //             }
    //         }
    //     }
    // }

    // Q.8 - print multiplication table of 5
    // for(let i=1; i<=10; i++){
    //     console.log(`5 * ${i} = ${5*i}`);
    // } 

    // Q.9 - count how many numbers are grater then 8 between 1 to 15
    // let count = 0;
    // for(let i=1; i<15; i++){
    //     if(i>8){
    //         count++;
    //     }
    // }
    // console.log(`${count} numbers are grater then 8`);

    // Q.10 - Ask user for passward and print access status
    // const users = [
    //     {
    //         userId: "Abhishek",
    //         pass: "1234",
    //     },
    //     {
    //         userId: "Syam",
    //         pass: "1234",
    //     }
    // ]
    // let user = prompt("Enter UserId: ");
    // let password = prompt("Enter yiur passward: ");

    // const foundUser = users.find(u  => u.userId === user);

    // if (foundUser && foundUser.pass === password) {
    //     console.log("Access Granted ✅");
    // } else {
    //     console.log("Access Denied ❌");
    // }

    // Q.11 - Allow only 3 attempts to enter correct password
    // const users = [
    //     {
    //         userId: "Abhishek",
    //         pass: "1234",
    //     },
    //     {
    //         userId: "Syam",
    //         pass: "1234",
    //     }
    // ]
    // let user = prompt("Enter UserId: ");

    // const foundUser = users.find(u  => u.userId === user);

    // if(foundUser){
    //     let i=0;
    //     for(i=1; i<=3; i++){
    //         let password = prompt("Enter yiur passward: ");
    //         if(foundUser.pass === password){
    //             console.log("Access Granted ✅");
    //             break;
    //         } else {
    //             console.log(`${i} attempt`);
    //         }
    //     }
    //     if(i===4){
    //         console.log("Account is locked");
    //     }
    // } else {
    //     console.log("Access Denied ❌");
    // }

    // Q.12 - Ask user for words until they type “stop”. Count how many times they typed “yes”
    