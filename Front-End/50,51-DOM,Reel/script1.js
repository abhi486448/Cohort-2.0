const reels = [
    {
        id: 1,
        username: "alex_travels",
        userProfile: "https://i.pravatar.cc/150?u=alex_travels",
        likeCount: 48200,
        isLiked: true,
        commentCount: 312,
        caption: "Sunrise at the Himalayan base camp — absolutely breathtaking 🏔️ #travel #himalaya #adventure",
        video: "./reels/video1.mp4",
        shareCount: 1840,
        isFollowed: true,
    },
    {
        id: 2,
        username: "codewithriya",
        userProfile: "https://i.pravatar.cc/150?u=codewithriya",
        likeCount: 23500,
        isLiked: false,
        commentCount: 187,
        caption: "Built a full-stack app in 48 hrs at a hackathon — here's how 💻 #coding #hackathon #webdev",
        video: "./reels/video2.mp4",
        shareCount: 970,
        isFollowed: false,
    },
    {
        id: 3,
        username: "foodie_arjun",
        userProfile: "https://i.pravatar.cc/150?u=foodie_arjun",
        likeCount: 61800,
        isLiked: true,
        commentCount: 504,
        caption: "Making authentic butter chicken from scratch — grandma's secret recipe 🍛 #food #recipe #indianfood",
        video: "./reels/video3.mp4",
        shareCount: 2600,
        isFollowed: true,
    },
    {
        id: 4,
        username: "dance.with.priya",
        userProfile: "https://i.pravatar.cc/150?u=dance.with.priya",
        likeCount: 89400,
        isLiked: false,
        commentCount: 741,
        caption: "Learning this trending step took me 3 days — totally worth it! 💃 #dance #trending #reels",
        video: "./reels/video4.mp4",
        shareCount: 4300,
        isFollowed: true,
    },
    {
        id: 5,
        username: "fitnessbyrohan",
        userProfile: "https://i.pravatar.cc/150?u=fitnessbyrohan",
        likeCount: 33100,
        isLiked: true,
        commentCount: 229,
        caption: "5 exercises you can do without any equipment 🔥 Tag someone who needs this! #fitness #workout #gym",
        video: "./reels/video5.mp4",
        shareCount: 1500,
        isFollowed: false,
    },
];
var AllReels = document.querySelector(".All-reels");

function FillReel() {
    var clutter = "";
    reels.forEach(function (elem, idx) {
        clutter += `<div class="reel" id="reel-${idx}">
                    <video autoplay loop muted class="main-img"
                        src="${elem.video}"
                        alt=""></video>

                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}"
                                alt="">
                            <h4>${elem.username}</h4>
                            <button class="follow" data-index="${idx}" >${elem.isFollowed ? "Unfollow" : "Follow"}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>

                    <div class="right">
                        <div id="${idx}" class="like">
                            <h4 class="like-icon">${elem.isLiked ? '<i class="ri-poker-hearts-fill icolor"></i>' : '<i class="ri-poker-hearts-line"></i>'}</h4>
                            <h6 >${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-1-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`;
    })

    AllReels.innerHTML = clutter;
}

function FillLikes(id, check) {
    var element1 = document.querySelector(`#reel-${id} .right .like h4`);
    var element2 = document.querySelector(`#reel-${id} .right .like h6`);

    if (check) {
        element1.innerHTML = '<i class="ri-poker-hearts-fill icolor"></i>';
    } else {
        element1.innerHTML = '<i class="ri-poker-hearts-line"></i>';
    }

    element2.innerHTML = reels[id].likeCount;

}

function FillBTN(id, check){
    var BTN = document.querySelector(`#reel-${id} .bottom .user .follow`);

    if(check){
        BTN.innerHTML = 'Unfollow';
    } else {
        BTN.innerHTML = 'Follow';
    }
    // console.log(BTN);
}

function BTNEvent() {
    AllReels.addEventListener('click', function (dets) {
        if (dets.target.className == 'like') {
            console.log(dets.target.id);
            if (reels[dets.target.id].isLiked) {
                reels[dets.target.id].likeCount--;
                reels[dets.target.id].isLiked = false;
            } else {
                reels[dets.target.id].likeCount++;
                reels[dets.target.id].isLiked = true;
            }
            FillLikes(dets.target.id, reels[dets.target.id].isLiked);
        }

        if (dets.target.className == 'follow') {
            console.log(dets.target.dataset.index);
            if (reels[dets.target.dataset.index].isFollowed) {
                reels[dets.target.dataset.index].isFollowed = false;
            } else {
                
                reels[dets.target.dataset.index].isFollowed = true;
            }
            FillBTN(dets.target.dataset.index, reels[dets.target.dataset.index].isFollowed);
        }
    })
}

BTNEvent();
FillReel();