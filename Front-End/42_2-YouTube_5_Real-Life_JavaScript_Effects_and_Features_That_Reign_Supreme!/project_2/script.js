var photo = document.querySelector('#section2');
var hart_icon = document.querySelector('#hart_icon');
var hart = document.querySelector('#hart');

var like_count = document.querySelector('#like_count');
let count = 50;
like_count.innerHTML = `${count}`;

let like = false;

photo.addEventListener('dblclick', function () {
    if (like === false) {
        hart_icon.classList = 'ri-heart-3-fill';
        hart_icon.classList.remove("ri-heart-3-line");
        count++;
        like_count.innerHTML = `${count}`;
        like = true;

        hart.style.color = "red";
        hart.style.transform = "translate(-50%,-50%) scale(1)";

        setTimeout(() => {
            hart.style.transform = "translate(-50%,-50%) scale(0)";
        }, 500);


    } else {
        hart_icon.classList = 'ri-heart-3-line';
        hart_icon.classList.remove("ri-heart-3-fill");
        count--;
        like_count.innerHTML = `${count}`;
        like = false;

        hart.style.color = "#fff";
        hart.style.transform = "translate(-50%,-50%) scale(1)";

        setTimeout(() => {
            hart.style.transform = "translate(-50%,-50%) scale(0)";
        }, 500);
    }
})