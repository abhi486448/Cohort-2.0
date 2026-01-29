// object

// let obj = {
//     name: "Abhishek",
//     age: 22,
//     khaana: "daal chaawal",
// }
// console.log(obj.name,obj.age,obj.khaana); // we can access by this

// Dot vs bracket notation
// or
// console.log(obj['age']);
// if we want to use a varable then
// let aa = "name";
// console.log(obj[aa]);

// Key-value structure
// let obj = {
//     name: "Abhishek", // heare name, job are key and its value pair is Abhishe, Developer
//     job: "Developer"
// }

// Nesting and deep access
// const user = {
//     name: "Harsh",
//     address: {
//         city: "Bhopal",
//         pin: 462001,
//         location: {
//             lat: 23.2,
//             lng: 77.4,
//         },
//     },
// };
// console.log(user.address.location.lng);

// Object destructuring
// const user = {
//     name: "Harsh",
//     address: {
//         city: "Bhopal",
//         pin: 462001,
//         location: {
//             lat: 23.2,
//             lng: 77.4,
//         },
//     },
// };
// let {lat,lng} = user.address.location;
// console.log(lat, lng);

// loop

// for-in
// let obj = {
//     name: "harsh",
//     age: 22,
//     email: "test@test.com",
// }
// for(let key in obj){
//     console.log(key, obj[key]); // we will ge every key with its value
// }

// Object.keys
// let obj = {
//     name: "harsh",
//     age: 22,
//     email: "test@test.com",
// }
// console.log(Object.keys(obj)); // it will give all keys in a array
// // Object.entries
// console.log(Object.entries(obj)); // it will give arrays of array having key and its value

// Copying onjects

// spread
// let obj = {
//     name: "harsh",
//     age: 22,
//     email: "test@test.com",
// }
// let obj2 = {...obj};
// console.log(obj2);

// Object.assign
// let obj = {
//     name: "harsh",
//     age: 22,
//     email: "test@test.com",
// }
// // let obj2 = Object.assign({}, obj);
// // console.log(obj2); // it will work same as spread
// let obj2 = Object.assign({price: "infinite"}, obj);
// console.log(obj2); // but in this a extra key value include

// deep clone
// let obj = {
//     name: "harsh",
//     age: 22,
//     email: "test@test.com",
//     address: {
//         city: "bhopsl",
//     },
// };
// let obj2 = {...obj};
// console.log(obj);
// console.log(obj2);
// obj2.address.city = "Indore";
// console.log(obj);
// console.log(obj2); // here is problem because rest then address all kay and value pass as copy but city was pass as copy that's why we have city indore everywhere
// solution
// let obj = {
//     name: "harsh",
//     age: 22,
//     email: "test@test.com",
//     address: {
//         city: "bhopsl",
//     },
// };
// let obj2 = JSON.parse(JSON.stringify(obj));
// console.log(obj);
// console.log(obj2);
// obj2.address.city = "Indore";
// console.log(obj);
// console.log(obj2);

// Optional chaning
// let obj = {
//     name: "harsh",
//     age: 22,
//     email: "test@test.com",
//     addresses: { // address changed to addresses
//         city: "bhopsl",
//     },
// };
// // console.log(obj.address.city); // this will work if nothing change
// // after changing address to addesses above log will throw error
// console.log(obj?.address?.city); // but this will show undefined insted of error

//computed properties
// let role = "admin"
// let obj = {
//     name: "harsh",
//     age: 22,
//     email: "test@test.com",
//     address: {
//         city: "bhopsl",
//     },
//     [role]: "harsh",
// };
// console.log(obj); // a field admin will added to obj

//question

// Create a object for a student with name, age, and isEnrolled.
// let obj = {
//     name: "Abhishek",
//     age: 22,
//     isEnrolled: true,
// };
// console.log(obj);

// Can an object key be a number or boolean? Try this
// let obj = {
//     true: "yes",
//     43: "andfw",
// };
// console.log(obj); // yes it is posible

// Access the value of "first-name" from this object;
// const user = {
//     "first-name": "harsh",
// }
// console.log(user["first-name"]);

// Given a dynamic key let key = "age", how will you access user[key]?
// let key = "age";
// let obj = {
//     age: 22,
// };
// console.log(obj[key])

// Frome the object below, print the latitude;
// const locations ={
//     city: "Bhopal",
//     coordinates: {
//         lat: 23.4,
//         lng: 77.4,
//     },
// };
// let {lat, lng} = locations.coordinates;
// console.log(lat, lng);

// What will happend if coordinates is missing? How can you prevent errors?
// const locations ={
//     city: "Bhopal",
//     coordinates: {
//         lat: 23.4,
//         lng: 77.4,
//     },
// };
// console.log(locations?.coordinate?.lat);

// Destructure the city and lat from the location onject above.
// let {city} = locations;
// let {lat} = locations.coordinates;
// console.log(city, lat);

// Destructure the key "first-name" as a varable called firstName.
// const user = {
//     "first-name": "Harsh",
// };
// let {"first-name": firstName} = user;
// console.log(firstName)

// Use for-in to log all Keys in this object
// const course = {
//     title: "JavaScript",
//     duration: "4 weeks",
// };
// for(let key in course){
//     console.log( key )
// }

// Use Object.entries() to print all key-value paires as:
// title: JavsScript
// duration: 4 week
// const course = {
//     title: "JavaScript",
//     duration: "4 weeks",
// };
// Object.entries(course).forEach(function(val){
//     console.log(val[0] + " : " + val[1]);
// })

// copy object using spred operater
// const original = {a: 1, b: 3};
// const copy = {...original};
// console.log(copy)

// What is problam with this 
// const obj1 = {info: { score: 80 }, };
// const clone = {...obj1};
// clone.info.score = 100;
// console.log(obj1.info.score); //the value of score was pass as refrance!

// Deep clone the obj1 safely.
// const obj1 = {info: { score: 80 }, };
// const clone = JSON.parse(JSON.stringify(obj1));
// clone.info.score = 100;
// console.log(obj1.info.score); // this will work perfectly

// Rewrite this safely using optional chaning:
// const person = {};
// console.log(person?.profile?.name); // no error only undefined

// Use a varaible to dynamicaly assign property
let key = "role";
const user = {
    name: "Abhishek",
    age: 22,
    [key]: "admin",
};
console.log(user);