var arr = [
    {dp : "https://plus.unsplash.com/premium_photo-1664366737698-3a98169201c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8fDA%3D", story : "https://images.unsplash.com/photo-1514315384763-ba401779410f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmx8ZW58MHx8MHx8fDA%3D"},
    {dp : "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmx8ZW58MHx8MHx8fDA%3D", story : "https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmx8ZW58MHx8MHx8fDA%3D"},
    {dp : "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGdpcmx8ZW58MHx8MHx8fDA%3D", story : "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdpcmx8ZW58MHx8MHx8fDA%3D"},
    {dp : "https://images.unsplash.com/photo-1596434300655-e48d3ff3dd5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGdpcmx8ZW58MHx8MHx8fDA%3D", story : "https://images.unsplash.com/photo-1592188657297-c6473609e988?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGdpcmx8ZW58MHx8MHx8fDA%3D"},
    {dp : "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGdpcmx8ZW58MHx8MHx8fDA%3D", story : "https://images.unsplash.com/photo-1614270532514-904c3aa5628e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGdpcmx8ZW58MHx8MHx8fDA%3D"},
];

var clutter = "";

arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                    <img id="${idx}" src=${elem.dp} alt="">
                </div>`
})

var storyes = document.querySelector('#storiyes');

storyes.innerHTML = `${clutter}`;

var screen = document.querySelector("#full-screen");

storyes.addEventListener("click", function(dets){
    screen.style.display = "block";
    screen.innerHTML = `<img src=${arr[dets.target.id].story} alt="">`

    setTimeout(function(){
        screen.style.display = "none";
    },3000);
})