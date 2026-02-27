var card1 = document.querySelector('#card1');
var stranger1 = document.querySelector('#card1 h5');
var Add1 = document.querySelector('#card1 #add');
var friend1 = false;
var ig1 = document.querySelector('#btn-container #ignore1');

var card2 = document.querySelector('#card2');
var stranger2 = document.querySelector('#card2 h5');
var Add2 = document.querySelector('#card2 #add');
var friend2 = false;
var ig2 = document.querySelector('#btn-container #ignore2');

Add1.addEventListener('click', function () {
    if (friend1 === false) {
        stranger1.textContent = "Friend";
        Add1.textContent = "Undo";
        Add1.style.backgroundColor = "#cdcdcd";
        Add1.style.color = "#000";
        friend1 = true;
    } else {
        stranger1.textContent = "Stranger";
        Add1.textContent = "Add Friend";
        Add1.style.backgroundColor = "#0095F6";
        Add1.style.color = "#fff";
        friend1 = false;
    }
})

Add2.addEventListener('click', function () {
    if (friend2 === false) {
        stranger2.textContent = "Friend";
        Add2.textContent = "Undo";
        Add2.style.backgroundColor = "#cdcdcd";
        Add2.style.color = "#000";
        friend2 = true;
    } else {
        stranger2.textContent = "Stranger";
        Add2.textContent = "Add Friend";
        Add2.style.backgroundColor = "#0095F6";
        Add2.style.color = "#fff";
        friend2 = false;
    }
})

ig1.addEventListener('click',function(){
    card1.style.display = "none";
})

ig2.addEventListener('click',function(){
    card2.style.display = "none";
})