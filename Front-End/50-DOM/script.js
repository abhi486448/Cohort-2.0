var Allbtn = document.querySelectorAll("button");

Allbtn.forEach((elem) => {
    elem.addEventListener("click", function(){
        if(elem.innerHTML == "follow"){
            elem.innerHTML = "Unfollow";
        } else {
            elem.innerHTML = "follow";
        }
    })
})