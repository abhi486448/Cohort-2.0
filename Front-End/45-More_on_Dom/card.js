var btn = document.querySelector('#btn');
var downloadBar = document.querySelector('.inner');
var downloadPer = document.querySelector('#percent');

btn.addEventListener('click', () => {
    btn.style.pointerEvents = 'none';
    btn.style.opacity = 0.5;

    var num = 50 + Math.floor(Math.random()*50);

    var per = 0;
    var Interval = setInterval(() => {
        per++;
        downloadBar.style.width = per + "%";
        downloadPer.innerHTML = `${per} %`;
    }, num);

    setTimeout( () => {
        clearInterval(Interval);
        console.log("Download done in", num/10, "Seconds");
    }, num*100);
})