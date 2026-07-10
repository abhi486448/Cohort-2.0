/// section 1

    // 1
// let obj = {
//     name: "raju",
//     email: "test@test.com",
//     fnc: function(){
//         return 'user logged in'
//     }
// }

    // 2
// let obj1 = {
//     name: "raju1",
//     email: "test@test.com",
//     fnc: function(){
//         return 'user1 logged in'
//     }
// }

// let obj2 = {
//     name: "raju2",
//     email: "test@test.com",
//     fnc: function(){
//         return 'user2 logged in'
//     }
// }

// let obj3 = {
//     name: "raju3",
//     email: "test@test.com",
//     fnc: function(){
//         return 'user3 logged in'
//     }
// }

// let obj4 = {
//     name: "raju4",
//     email: "test@test.com",
//     fnc: function(){
//         return 'user4 logged in'
//     }
// }

// let obj5 = {
//     name: "raju5",
//     email: "test@test.com",
//     fnc: function(){
//         return 'user5 logged in'
//     }
// }


// class User{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }

//     login(){
//         return "user logged in"
//     }
// }

// let user1 = new User("user1", "test@test.com")
// let user2 = new User("user2", "test@test.com")
// let user3 = new User("user3", "test@test.com")
// let user4 = new User("user4", "test@test.com")
// let user5 = new User("user5", "test@test.com")

    //3
// class Product{
//     constructor(name, price){
//         this.name = name
//         this.price = price
//     }

//     discount(){
//         return `price :${this.price} on discount price is: ${this.price - 50}`
//     }
// }

// let p1 = new Product("shose", 1200)

// Section 2

    //4
// class Car{
//     constructor(brand, speed){
//         this.brand = brand
//         this.speed = speed
//     }

//     drive(){
//         return `drive ${this.brand} with speed ${this.speed}`
//     }
// }

// let jeep = new Car("jeep", 100)
// let honda = new Car("Honda civic", 200)

    //6
// then we need to create multiples of onjects 

// Section 3

    //7
// class Student{
//     constructor(name, rollno){
//         this.name = name
//         this.rollno = rollno
//     }

//     identity(){
//         return this.name + " " + this.rollno
//     }
// }

// let st1 = new Student("raju", 10)
// let st2 = new Student("krish", 21)

    //8
// class Student{
//     constructor(name, rollno){
//         name = name
//         rollno = rollno
//     }

//     identity(){
//         return this.name + " " + this.rollno
//     }
// }

// let st1 = new Student("raju", 10)
// let st2 = new Student("krish", 21)
// resion if we remove this in constructor the vslues will not asign

    //9

// let obj = {
//     fnc1: function(){
//         return this
//     },

//     fnc2: ()=>{
//         return this
//     }
// }

// if we run obj.fnc1() it will return that object
// but if we run obj.fnc2() then it will return window

// Section 4

    //10 //11 //12
// function user(val){
//     this.name = val
//     this.login = function(){
//         return "logged in"
//     }
// }

// user.prototype.login = function(){
//     return "logged in"
// }

// let user1 = new user("raju")
// let user2 = new user("pritam")

// if we compared when we were using prototype function the result is true because prototype is shared with both user means both function are same
// if we user function in constructer that means both user have their own login function that mean both are not same so the result is false


// Section 5

    // 13
// function printName(){
//     console.log(this.name) // inisaly there is nathing like this.name
// }

    // 14
// let obj = {
//     name: "harsh",
// }
// printName.call(obj) // this will set onjet in function obj

// printName.apply(obj)

// let newFun = printName.bind(obj)

    // 15

// function callFunFromOtherObj(){
//     console.log(this.name)
//     this.fnc()
// }

// let obj = {
//     name: "heraa",
//     fnc: function(){
//         console.log("this is fnc of other obj")
//     }
// }

// callFunFromOtherObj.call(obj)