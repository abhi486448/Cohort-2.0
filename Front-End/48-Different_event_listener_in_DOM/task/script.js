var piano = document.querySelector(".part-2");
var audio = new Audio;
var idx = 21;
var arr = ['C','D','E','F','G','A','B'];
var arr1 = ['Q','W','E','R','T','Y','U','I','O','P','Z','X','C','V','B','N','M',',','.','/'];
var arr3=['2','3','5','6','7','9','0','S','D','F','H','J','L',';',`'`];

function appendBtn(){
    var clutter = "";
    
    var count = 0;
    var j=0;
    var clutter1 = "";
    for(let i=1; i<=36; i++){
        if(i>=8 && j<arr1.length){
            clutter1 = `<div class="extra" data-index="${idx}" data-name="${arr1[j]}">${arr1[j]}</div>`;
            j++;
            idx++;
        } else {
            clutter1 = `<div class="extra" data-index="${idx}"></div>`;
            idx++;
        }
        var car = arr[count];
        clutter += `<div class="btn btn-${i}" >
                <div>
                    ${clutter1}
                    <h4>${car}</h4>
                </div>
            </div>`;
        if(count == 6){
            count = 0;
        } else {
            count++;
        }
    }

    var clutter3 = "";
    var L = 22;
    var LQ = [40,64,40,40,64]
    var count = 0;
    var count1 = 0;
    var clutter4 = "";
    for(let i=1; i<=25; i++){
        var elem = document.createElement("div");
        if(i>=6 && count1<=arr3.length-1){
            clutter4 = `<div class="extra extra1" data-index="${idx}" data-name="${arr3[count1]}">${arr3[count1]}</div>`;
            elem.innerHTML = clutter4;
            count1++;
            elem.classList = `s-btn-${i} s-btn`;
            idx++;
        } else {
            elem.classList = `s-btn-${i} s-btn`;
            elem.setAttribute("data-index",`${idx}`);
            idx++;
        }
        elem.style.left = (L) +"px";
        elem.style.top = "0px";
        clutter3 += elem.outerHTML;
        if(count>4){
            count = 0;
            L += LQ[count];
        } else L += LQ[count];

        count++;

    }


    piano.innerHTML = clutter;
    piano.insertAdjacentHTML("beforeend", clutter3);
}

function OnClickScreen(){
    piano.addEventListener("click", function(elm){
        FindKeyAndPlay(elm.target.attributes[1].value);
    })
}

function OnPressKey(){
    
    document.body.addEventListener("keydown", function(elm){
        var n = 0;

        if(arr1.includes(elm.key.toUpperCase())){
            n = arr1.indexOf(elm.key.toUpperCase());
            FindKeyAndPlay(n+27);
            var elem = document.querySelector(`.btn-${n+8}`);
            elem.classList.add("btn-active");
            setTimeout(() => {
                elem.classList.remove("btn-active");
            }, 200);
            // console.log(elem);
        }
        if(arr3.includes(elm.key.toUpperCase())){
            n = arr3.indexOf(elm.key.toUpperCase());
            FindKeyAndPlay(n+ 62);
            var elem1 = document.querySelector(`.s-btn-${n+6}`);
            elem1.classList.add("s-btn-active");
            setTimeout(() => {
                elem1.classList.remove("s-btn-active");
            }, 200);
        }
    })
}

function FindKeyAndPlay(elm){
    console.log(elm);
    audio.src = `./songs/${elm}.mp3`;
    audio.play();
}

OnPressKey();
OnClickScreen()
appendBtn();