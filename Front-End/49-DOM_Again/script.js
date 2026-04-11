// var Allh1 = document.querySelectorAll("h1");

// console.log(Allh1); // This will give a nodeList which is similer to array but some matherds not work same as that of array like filter, mape not work same as array altho ForEach work and many mire 

// Allh1.forEach((elem) => {
//     console.log(elem.innerHTML)
// })

// var outer = document.querySelector("#outer");

// console.log(outer.childNodes);
// console.log(outer.childNodes[1]);


var Allelem = document.querySelectorAll(".elem");

Allelem.forEach((elem) => {
    console.log(elem.childNodes[1].textContent);
})