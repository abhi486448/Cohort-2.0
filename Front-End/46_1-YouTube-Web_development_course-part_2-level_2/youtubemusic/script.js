var arr = [
    { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
    { songName: "Arjan Vailly Ne", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" },
    { songName: "Ram Siya Ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    { songName: "Pehle Bhi Main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
]

var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");
var flag = 0;

var audio = new Audio();

var selectedSong = 0;

function loadSongs() {
    var clutter = "";
    arr.forEach(function (obj, index) {
        clutter += `<div class="song-card" data-index="${index}">
                    <div class="part1">
                        <img src="${obj.img}" alt="">
                        <h2>${obj.songName}</h2>
                    </div>
                    <h6>3:56</h6>
                </div>`;
    })

    document.querySelector("#left")
        .style.backgroundImage = `url(${arr[selectedSong].img})`;

    audio.src = arr[selectedSong].url;

    document.querySelector("#all-songs")
        .innerHTML = clutter;
}

function selectSongAndPlay() {

    document.querySelector("#all-songs")
        .addEventListener("click", function (details) {
            // console.log(details.target.dataset.index)
            console.log(details.target.dataset.index)
            document.querySelector("#left")
                .style.backgroundImage = `url(${arr[details.target.dataset.index].img})`;

            selectedSong = details.target.dataset.index;
            loadSongs();
            audio.play();
            play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
            flag = 1;
        })
}

function playerEvents() {
    play.addEventListener("click", function () {
        if (flag == 0) {
            play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
            audio.play();
            flag = 1;
        } else {
            play.innerHTML = `<i class="ri-play-fill"></i>`;
            audio.pause();
            flag = 0;
        }
    })

    backward.addEventListener("click", function(){
        if(selectedSong != 0 ){
            selectedSong--;
            loadSongs();
            audio.play();
            forward.style.opacity = 1;
        } else {
            if(selectedSong == 0){
                backward.style.opacity = 0.4;
            } else {
                backward.style.opacity = 1;
            }
        }
    })

    forward.addEventListener("click", function(){
        if(selectedSong < arr.length ){
            selectedSong++;
            loadSongs();
            audio.play();
            backward.style.opacity = 1;
        } else {
            if(selectedSong === arr.length){
                forward.style.opacity = 0.4;
            } else {
                forward.style.opacity = 1;
            }
        }
    })
}

playerEvents();
selectSongAndPlay();
loadSongs();