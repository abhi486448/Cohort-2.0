// show real products
var products = [
    { name: "Wooden Bar Stool", headline: "Soft As Cloud", price: "15,000", image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Wooden Gray Chair", headline: "Comfert is Importent", price: "20,000", image: "https://plus.unsplash.com/premium_photo-1680112806039-244731d88d45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYWlyfGVufDB8fDB8fHww" },
    { name: "Armchair Isolated", headline: "Offic Star", price: "30,000", image: "https://media.istockphoto.com/id/869078270/photo/armchair-isolated-on-white-background-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=3hT469tDl_4ttthWj2rPqCArA47d6g8yeaz2E7uCZKA=" },
];
var popular = [
    { name: "A Yello", headline: "Soft As Cloud", price: "15,000", image: "https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D" },
    { name: "Gray Chair", headline: "Comfertable", price: "20,000", image: "https://plus.unsplash.com/premium_photo-1680112806039-244731d88d45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYWlyfGVufDB8fDB8fHww" },
    { name: "Armchair", headline: "Offic Star", price: "30,000", image: "https://media.istockphoto.com/id/869078270/photo/armchair-isolated-on-white-background-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=3hT469tDl_4ttthWj2rPqCArA47d6g8yeaz2E7uCZKA=" },
];

var cart = [];

function showProducts() {
    var clutter = "";
    products.forEach((product, idx) => {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img class="object-cover w-full h-full" src="${product.image}" alt="">
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
                        </div>
                        <button data-index="${idx}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${idx}"
                                class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`
    })
    document.querySelector(".products")
        .innerHTML = clutter;
}

function showPopularProduct() {
    var clutter = "";
    popular.forEach(function (product) {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
                    </div>
                </div>`;

    })
    document.querySelector(".populars").innerHTML = clutter;



}

function addToCart() {
    document.querySelector(".products")
        .addEventListener("click", function (details) {
            if (details.target.classList.contains('add')) {
                // console.log(details.target.dataset.index);
                cart.push(products[details.target.dataset.index]);
                console.log(cart);
            }
        })
}

function showCart() {

    document.querySelector(".carticon")
    .addEventListener("click" , function(){
        var expand = document.querySelector(".cartexpnd");
        expand.style.display = "block";

        var clutter = "";
        cart.forEach(function (product, index) {
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                    <img class="w-full h-full object-cover" src="${product.image}" />
                </div>
                <div>
                    <h3 class="font-semibold">${product.name}</h3>
                    <h5 class="text-sm font-semibold opacity-80">&#8377; ${product.price}</h5>
                </div>
            </div>`;
        })
        expand.innerHTML = clutter;
    })

}

showCart();
addToCart();
showPopularProduct();
showProducts();
// show real popular products
// on click of product add button add it to the cart