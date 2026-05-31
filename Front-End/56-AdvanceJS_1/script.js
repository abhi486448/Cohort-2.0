// 1. objects

let obj = {
    name: "harsh",
    age: 20
}

// 2. classes

// class BiscuitMaker {
//     constructor(){
//         this.name = "ParleG";
//         this.price = 5;
//     }
// }

// let biscuit1 = new BiscuitMaker();
// let biscuit2 = new BiscuitMaker();
// let biscuit3 = new BiscuitMaker();
// let biscuit4 = new BiscuitMaker();
// classes banaate hai taaki hame har baar ek naya object mil jaaye
// classes object ki factory hai
// har baar new word ke saath class run karoge to yek naya object mile ga

// class AlooChaat {
//     constructor(){
//         this.price = 55;
//         this.oil = "5ml";
//         this.oilBrand = "Saffola";
//         this.masaale = ["dhaniya","pudina","mirch"]
//     }

//     pack(){
//         console.log("aaloo chaat packed")
//     }

//     unpack(){
//         console.log("aaloo chaat unpacked")
//     }
// }

// class ChholeChaat {
//     constructor(){
//         this.price = 55;
//         this.oil = "5ml";
//         this.oilBrand = "Saffola";
//         this.masaale = ["dhaniya","pudina","mirch"]
//     }

//     pack(){
//         console.log("aaloo chaat packed")
//     }

//     unpack(){
//         console.log("aaloo chaat unpacked")
//     }
// }

// let Al1 = new AlooChaat();
// Al1.pack();
// Al1.unpack();
// if we call alooChaat's function and it didn't run then we check AlooChat class only not the ChholeChaat class

// class Kitaab {
//     constructor(name, price, auther, color){
//         this.name = name;
//         this.price = price;
//         this.auther = auther;
//         this.color = color;
//     }

//     pannaPalto(){}
//     bookMarkLagao(){}
//     padhlo(){}
// }

// let k1 = new Kitaab("moral", 120, "harsh sharma", "Yellow")
// let k2 = new Kitaab("computer science", 890, "Gopu Bao", "Red")
// let k3 = new Kitaab("constitution", 362, "Swatantra senanies", "dark blue")


// 3. prototype

class Human {
    constructor(){
        this.name = "abcd";
        this.age = 10;
    }
}

Human.prototype.saansLo = function(){
    console.log("hey");
}

Human.prototype.khaanKhaao = function(){
    console.log("hey");
}

let h1 = new Human();
let h2 = new Human();
// function saansLo and khaanKhaao are shared by h1 nad h2 both because of prototype, prototype is a shared memory