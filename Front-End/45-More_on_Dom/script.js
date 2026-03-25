// console.log("Hello 1");

// setTimeout(function(){
//     console.log("Hello 2");
// }, 2000);

// // console.log("Hello 3");

// setTimeout(function(){
//     console.log("Hello 1");
// }, 5000);
// setTimeout(function(){
//     console.log("Hello 2");
// }, 2000);
// setTimeout(function(){
//     console.log("Hello 3");
// }, 4000);

var h1 = document.querySelector('h1');
var btn = document.querySelector('button');

btn.addEventListener('click', function () {

    setTimeout(() => {
        h1.innerHTML = "Hello I am Gillu";
    }, 2000);

})

// setInterval(() => {
//     console.log("Hello frome setInterval");
// }, 1000);

var a = 0;
var int = setInterval(() => {
    a++;
    console.log(a);
}, 100);

setTimeout(function () {
    clearInterval(int); // help to stop setInterval
}, 5000);