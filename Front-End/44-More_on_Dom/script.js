var btn = document.querySelector('#btn');
var main = document.querySelector('main');

btn.classList

btn.addEventListener("click", function(){
    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.width = '50px';
    div.style.height = '50px';

    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);

    var r = Math.floor(Math.random()*360);

    div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    div.style.rotate = r + "deg"

    var left_point = Math.floor(Math.random()*100);
    var top_point = Math.floor(Math.random()*100);

    div.style.top = top_point + "%";
    div.style.left = left_point + "%";
    main.appendChild(div);
})