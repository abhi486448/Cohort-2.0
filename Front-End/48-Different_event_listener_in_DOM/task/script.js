var piano = document.querySelector(".part-2");

function appendBtn(){
    var clutter = "";
    var arr = ['C','D','E','F','G','A','B'];
    var arr1 = ['Q','W','E','R','T','Y','U','I','O','P','Z','X','C','V','B','N','M',',','.','/'];
    var SBTN = [
        {   
            1:{left : 22},
            2:{left : 44},
        },
        {
            1:{left : 66},
            2:{left : 88},
            3:{left : 110},
        }
    ]
    var count = 0;
    var j=0;
    var clutter1 = "";
    for(i=1; i<=36; i++){
        if(i>=8 && j<arr1.length){
            clutter1 = `<div class="extra">${arr1[j]}</div>`;
            j++;
        } else {
            clutter1 = "";
        }
        var car = arr[count];
        clutter += `<div class="btn">
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

    for(i=1; i<=25; i++){
        clutter += `<div class="s-btn-${i}"></div>`;
        document.querySelector("`.s-btn-${i}`").style.left = (i*22) +"px";
        document.querySelector("`.s-btn-${i}`").style.top = 0+"px";
    }


    piano.innerHTML = clutter;
}

appendBtn();