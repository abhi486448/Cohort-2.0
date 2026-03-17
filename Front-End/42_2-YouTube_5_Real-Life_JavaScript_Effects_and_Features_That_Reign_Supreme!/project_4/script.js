var elem = document.querySelectorAll('.elem');
var elemImg = document.querySelector('.elem img');

elem.forEach(function (val) {

    val.addEventListener('mousemove', function (dets) {
        val.childNodes[3].style.left = dets.x + 'px';
    })

    val.addEventListener('mouseenter', function () {
        val.childNodes[3].style.opacity = 1;
        val.style.backgroundColor = "red";
    })

    val.addEventListener('mouseleave', function () {
        val.childNodes[3].style.opacity = 0;
        val.style.backgroundColor = "transparent";
    })
})

// elem1.addEventListener('mousemove',function(dets){
//     elemImg.style.left = dets.x + 'px';
//     elemImg.style.top = dets.y + 'px';
// })

// elem1.addEventListener('mouseenter',function(dets){
//     elemImg.style.opacity = 1;
// })

// elem1.addEventListener('mouseleave',function(dets){
//     elemImg.style.opacity = 0;
// })