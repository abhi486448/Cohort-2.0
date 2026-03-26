var card = document.querySelector('.card');
var hart = document.querySelector('i');
var flag = false;

card.addEventListener('dblclick', () => {
    if (flag === false) {
        hart.style.opacity = 1;
        hart.style.backgroundImage = `linear-gradient(to right bottom, rgb(184, 8, 184), rgb(239, 6, 180))`;
        hart.style.backgroundClip = `text`;
        hart.style.color = `transparent`;
        hart.style.transform = 'translate(-50%, -50%) scale(1.5) rotate(10deg)';
        flag = true;

        setTimeout(() => {
            hart.style.top = 0;
            hart.style.transform = 'translate(-50%, -50%) rotate(-10deg)';
        }, 500);
        setTimeout(() => {
            hart.style.transform = 'translate(-50%, -50%) scale(0)';
            hart.style.top = 50 + "%";
        }, 700);
    } else {
        hart.style.opacity = 0.6;
        hart.style.color = "#fff";
        hart.style.transform = 'translate(-50%, -50%) scale(1.5) rotate(10deg)';
        flag = false;

        setTimeout(() => {
            hart.style.top = 0;
            hart.style.transform = 'translate(-50%, -50%) rotate(-10deg)';
        }, 500);
        setTimeout(() => {
            hart.style.transform = 'translate(-50%, -50%) scale(0)';
            hart.style.top = 50 + "%";
        }, 700);
    }
})