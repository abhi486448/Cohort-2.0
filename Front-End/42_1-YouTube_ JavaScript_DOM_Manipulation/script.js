// 4 Pillers of DOM

// 1. Selection of an Element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listener

// var bulb = document.querySelector("#bulb");
// var btn = document.querySelector("Button");

// var btnOn = false;

// btn.addEventListener('click',function(){
//     if(btnOn===false){
//         bulb.style.backgroundColor = "yellow";
//         btn.innerHTML = "Off Bulb";
//         btn.style.backgroundColor = "Crimson";
//         btnOn = true;
//     } else {
//         bulb.style.backgroundColor = "black";
//         btn.innerHTML = "On Bulb";
//         btn.style.backgroundColor = "black";
//         btnOn = false;
//     }
// })

// var h = document.querySelector('h1'); // but ti wil only sellect first h1 element not all h1
// console.log(h);

// var h = document.querySelectorAll('h1'); // insted of using quarySelecter we can use quarySelecterAll to select multiple elements at the same time
// // console.log(h); // it console h1 under a nodelist formet 
// h.forEach((val)=>{
//     console.log(val);
// })


var box = document.querySelector(".box");
// box.innerHTML = "<h1>Hello</h1>" // innerHTML helo to insert tages, content bith
box.textContent = "<h1>Hello</h1>" // but textContent insert tages as text