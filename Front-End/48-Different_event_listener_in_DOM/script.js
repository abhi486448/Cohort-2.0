var box = document.querySelector("#box");

// click

// box.addEventListener("click", () => {
//     console.log("hello_click");
// })

// double click

// box.addEventListener("dblclick", () => {
//     console.log("hello_dblclick");
// })

// when mouse enter

// box.addEventListener("mouseenter", () => {
//     console.log("hello_mouseenter");
// })

// when mouse exit or leave

// box.addEventListener("mouseleave", () => {
//     console.log("hello_mouseleave");
// })

// mouse move
// var main = document.querySelector("main");
// var img = document.querySelector("img");

// main.addEventListener("mousemove", (elem) => {
//     // console.log(elem); // it will show all details of mouse at that time
//     // console.log(elem.x);
//     // console.log(elem.y)
//     img.style.top = elem.y + "px";
//     img.style.left = elem.x + "px";
// })

// scroll
// document.querySelector("body")
// .addEventListener("wheel", (elem) => {
//     console.log(elem); // it will show all details of mouse at that time
// })

// for key entered in keybord
// document.querySelector(".input")
// .addEventListener("keydown", (elem) => {
//     console.log(elem); // it will show all details of mouse at that time
// })

var h3 = document.querySelector("h3"); 

document.body.addEventListener("keydown", function(elm){
    console.log(elm.code);
    h3.textContent = elm.code;
})