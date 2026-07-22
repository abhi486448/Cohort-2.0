// Section 1
    //1 //2
// let obj = {
//     brand: "hp",
//     price: 70000,
//     start: function(){
//         console.log("Leptop started")
//     },
//     IncreasePrice: function(){
//         console.log((this.price*0.1) + this.price)
//     }
// }

    //3
// we will need to create multiple onjects for same structure

// Section 2
    // 4
// class Employee{
//     constructor(name, salary){
//         this.name = name
//         this.salary = salary
//     }

//     printDetails(){
//         console.log(this.name, this.salary)
//     }
// }

    // 5
// let e1 = new Employee("Raju", 25000)
// let e2 = new Employee("sujal", 2000)
// let e3 = new Employee("raja", 2500)

    // 6
// class is best way to write objects on same structure it help to minimize code

// Section 3
    // 7 //8 //9
// class BankAccount{
//     constructor(accHolName, balance){
//         this.accHolName = accHolName
//         this.balance = balance
//     }

//     diposit(amount){
//         this.balance = this.balance + amount
//         console.log("new balance: ", this.balance)
//     }
// }

// let acc1 = new BankAccount("Raju", 1000)
// let acc2 = new BankAccount("Suresh", 1000)

// second account is not affected because both are two other objecs

// Section 4

    // 11
// let profile = {
//     username: "rohan",
//     printName: function(){
//         console.log(this.username)
//     }
// }
    // 12
// profile.printName()
    //13
// let seperatVerable = profile.printName
// seperatVerable()

    // in 12 we call profile.printName() which directly call function of profile object and console the username,
    // but in 13 we tryed to store that function in another verable then call that verable which shows undefine because this.username print username stored in that functions onj but since we take function only that throw undefine we need to set obj

    // 14
// let sepVer = profile.printName.bind(profile)
// sepVer()

// Section 5

    // 15
// function Vehical(name, wheel){
//     this.vehical= name
//     this.wheel = wheel
//     // this.describe = function(){
//     //     console.log("this car is good")
//     // }
// }

// Vehical.prototype.describe = function(){
//     console.log("this car is goog")
// }

// let v1 = new Vehical("honda civic", 4);
// console.log(v1)
// let v2 = new Vehical("maruti 100", 4);
// console.log(v2)

// prototype approach is preferred because if we creath matherd directli within the constructer function then it will be stored in all objects that we will create 
// insted we can use prototype to create metherds it  is same and same lots of memory by creationg only one methord that will be shared by every obj

// Section 6

    // 19
// function showBrand(){
//     console.log(this.brand)
// }

    // 20

// let br1 = {
//     brand: "cocke",
//     price: 50
// }

// let br2 = {
//     brand: "limka",
//     price: 20
// }

    // 21

// showBrand.call(br1)
// showBrand.call(br2)

    // 22

// ther is no obj for showBrand was set and call is solving that problem by setting objs for it

// Section 7

    // 23
// function indtoduce(city, role){
//     console.log(this.name + " " + city + "," + role)
// }

    // 24

// let obj = {
//     name: "Roshan"
// }

    // 25

// indtoduce.call(obj, "Indore", "SD")
// indtoduce.apply(obj, ["Rewa", "CE"])

    // 26
// apply takes arguments in an arrey formet []
// and call teckes arguments with , sepretion only

// Section 8

    // 27
function greet(){
    console.log("Hello " + this.name)
}

    // 28

let obj = {
    name: "Gojo"
}

let storGreet = greet.bind(obj)

    // 29

storGreet()

    // 30

// bind is very usefull when we have multiple objs we can simply bind that obj with function and store in any verable and exgicute whenever we want