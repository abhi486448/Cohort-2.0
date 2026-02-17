// Q.1 Write a highter-order function runTwice(fn) that takes another function and executes it two times.
    // function runTwice(fn){
    //     fn();
    //     fn();
    // }
    // runTwice(function (){
    //     console.log("hello");
    // });

// Q.2 Create one pure function that always returns the same output for given input, and one impure function using a global varable.
    // let glob = 20;
    // function pure(a, b){
    //     console.log(a + b);
    // }
    // pure(3,4);
    // pure(3,4);
    // function impure(){
    //     glob++;
    //     console.log(glob);
    // }
    // impure();
    // impure();

// Q.3 Write a function that uses object destructuring inside parameters to extract and print name and age.
    // function abc({name, age}){
    //     console.log(name);
    //     console.log(age);
    // }
    // abc({name: "Harsh", age: 23});

// Q.4 Demonstrate the diffrence between normal function and arrow function when used as object methords (this issue).
    // let obj = {
    //     name: "harsh",
    //     age: 23,
    //     fnc: function (){ // if we create function in obj then the value of this is that obj
    //         console.log(this);
    //     },
    //     fncArrow: ()=>{ // if we create Arrow function in obj then value of this will taken from it's parent which in let obj and for them value of this is window 
    //         console.log(this);
    //     }
    // }
    // obj.fnc();
    // obj.fncArrow();

    //and
    // let obj = {
    //     name: "harsh",
    //     age: 23,
    //     fnc: function (){ 
    //         let fanArrow = ()=>{ // here arrow function take value of this from it's parent fnc which had value of this obj
    //             console.log(this);
    //         }
    //         fanArrow();

    //         //but 
    //         function anc(){ // in this function it will rebind itself and again the value of this will be the window again
    //             console.log(this);
    //         }
    //         anc();
    //     },
        
    // }
    // obj.fnc();

// Q.5 Given an array of numbers, use map() to create a new array where each number is squared.
    // let arr = [1, 2, 3, 4, 5];
    // let arr2 = arr.map((val)=>{
    //     return val*val;
    // })
    // console.log(arr2);

// Q.6 Use filter() to get only even numbers from an array.
    // let arr = [1, 2, 3, 4, 5];
    // let arr2 = arr.filter((val) => {
    //     return (val%2 === 0);
    // })
    // console.log(arr2);

// Q.7 Use reduce() to find the total salary from any array of number [1000, 2000, 3000]
    // let arr = [1000, 2000, 3000];
    // let val = arr.reduce(function(acc, val){
    //     return acc+=val;
    // },0);
    // console.log(val);

// Q.8 Create an array of names and use some() and every() to test a condition (e.g., all namse longer than 3 chars).
    // let names = ["Abhishek", "Syam", "Ramesh", "suresh"];
    // let newarr = names.some((val) => {
    //     return (val.length <= 5);
    // })
    // console.log(newarr);
    // let newarr2 = names.every((val) => {
    //     return (val.length <= 5);
    // })
    // console.log(newarr2);

// Q.9 Create an object user and test the behavior of Object.freeze() and Object.seal() by adding/changing keys.
    // let user = {
    //     name: "harsh",
    //     age: 21,
    // }
    // // Object.freeze(user); // freeze help object to freez it so that no one can change the data and even can not add new value
    // // user.age = 24;
    // // console.log(user.age);

    // Object.seal(user); // with seal we can update data but can not add new values
    // user.age = 24;
    // user.socal = "insta";
    // console.log(user);

// Q.10 Create a nested object (user -> address -> city) and access the city inside it.
    let obj = {
        user: {
            name: "harsh",
            address: {
                city: "Bhopal",
            },
        },
    }
    let {city} = obj.user.address;
    console.log(city);