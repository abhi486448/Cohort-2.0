// var a = Math.random()*100; // Maht.random() give randum values from 0 to 1 in .

// var b = Math.floor(a); // Math.floor() convert float values to int

// console.log(b);

var box = document.querySelector('.box');
var btn = document.querySelector('.btn');

var red = 0;
var blue = 0;
var green = 0;

function change(){
    red = Math.floor(Math.random()*1000);
    blue = Math.floor(Math.random()*1000);
    green = Math.floor(Math.random()*1000);
    if(red>255 || blue>255 || green>255){
        change();
    }
}

// Math.floor(Math.random()*10) will give 10 randum values from 0 to 9 it will give that much randum values that we will multiply like in this case 10


btn.addEventListener("click", function(){
    change();
    box.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
})

var arr =  ["sbhi", "rahul", "shubham", "rohan", "ramesh"];

var num = Math.floor(Math.random()*(arr.length));

console.log(arr[num]);