// :- Topic 1

// let Animal = class {
//     constructor(){
//         this.name = "Dodo";
//         this.bread = "dog";
//     }
// };

// let an1 = new Animal();
// We can also create class with in verable

// :- Topic 2

// let an1 = new Animal(); // this will show error due to veriable hoisting

// let Animal = class {
//     constructor(){
//         this.name = "Dodo";
//         this.bread = "Dog";
//     }
// }

// :- Topic 3
// Inheritence

// class Animal {
//     constructor(){
//         this.hands = 2;
//         this.legs = 2;
//     }

//     IsBreathing(){
//         console.log("Sas lo")
//     }

//     IsLive(){
//         console.log("Jinda hai")
//     }
// };

// class Kekda extends Animal {
//     constructor(){
//         super();
//         this.hands = 0;
//         this.legs= 8;
//     }

//     susu(){
//         console.log("Susu kar")
//     }
// };

// let k1 = new Kekda();

// :- Topic 4
// getter, setter in inharitence

class Animal {
    constructor(){
        this._age = 20;
    }

    set age(value){
        if(value<0){
            console.log("Not")
            return;
        }

        this._age = value
        return this._age;
    }

    get age(){
        return this._age;
    }
};

let k1 = new Animal();
// we can use get and set to interact with veriable and make veriable private


