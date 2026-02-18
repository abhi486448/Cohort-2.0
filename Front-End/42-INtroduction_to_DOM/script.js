// DOM - Document Object Model
// Frontend ki JS

// DOM 4 Pillars
// - Selection of an Element
    // - querySelector
    // - querySelectorAll
    // - getElementById
    // - getElementsByClassName
// - Changing HTML
// - Changing CSS
// - Event listeners

// var h1 = document.querySelector('h1');
// var kuch = document.querySelector('h2');
// console.log(h1);
// console.log(kuch);

// var h1 = document.querySelector('h1');
// h1.innerHTML = 'Changed';

// var h1 = document.querySelector('h1');
// h1.innerHTML = 'Changed';
// h1.style.color = 'yellow';
// h1.style.backgroundColor = 'purple';

// let box = document.querySelector('#box');
// box.innerHTML = 'Hello Box';
// box.style.backgroundColor = 'royalblue';

// let h1 = document.querySelector('h1');
// h1.innerHTML = 'Changed';
// let btn = document.querySelector('button');
// btn.addEventListener('click',function(){
//     h1.innerHTML = 'I am Batman!';
// })

let a = 0;
let h1 = document.querySelector('h1');
let dec = document.getElementById('dec');
dec.addEventListener('click',function(){
    a--;
    h1.innerHTML = a;
})
let inc = document.getElementById('inc');
inc.addEventListener('click',function(){
    a++;
    h1.innerHTML = a;
})