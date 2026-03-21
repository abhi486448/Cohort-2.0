var arr = [
  {
    "shortName": "CSK",
    "fullName": "Chennai Super Kings",
    "primaryColor": "#FFFF3C",
    "secondaryColor": "#0081E9",
    "trophies": 5,
    "captainName": "Ruturaj Gaikwad"
  },
  {
    "shortName": "MI",
    "fullName": "Mumbai Indians",
    "primaryColor": "#004BA0",
    "secondaryColor": "#D1AB3E",
    "trophies": 5,
    "captainName": "Hardik Pandya"
  },
  {
    "shortName": "KKR",
    "fullName": "Kolkata Knight Riders",
    "primaryColor": "#3A225D",
    "secondaryColor": "#B3A123",
    "trophies": 3,
    "captainName": "Ajinkya Rahane"
  },
  {
    "shortName": "RCB",
    "fullName": "Royal Challengers Bengaluru",
    "primaryColor": "#EC1C24",
    "secondaryColor": "#000000",
    "trophies": 1,
    "captainName": "Rajat Patidar"
  },
  {
    "shortName": "SRH",
    "fullName": "Sunrisers Hyderabad",
    "primaryColor": "#FF822A",
    "secondaryColor": "#000000",
    "trophies": 1,
    "captainName": "Pat Cummins"
  },
  {
    "shortName": "RR",
    "fullName": "Rajasthan Royals",
    "primaryColor": "#EA1A85",
    "secondaryColor": "#001D48",
    "trophies": 1,
    "captainName": "Riyan Parag"
  },
  {
    "shortName": "GT",
    "fullName": "Gujarat Titans",
    "primaryColor": "#0B4973",
    "secondaryColor": "#D1AB3E",
    "trophies": 1,
    "captainName": "Shubman Gill"
  },
  {
    "shortName": "DC",
    "fullName": "Delhi Capitals",
    "primaryColor": "#00008B",
    "secondaryColor": "#FF0000",
    "trophies": 0,
    "captainName": "Axar Patel"
  },
  {
    "shortName": "PBKS",
    "fullName": "Punjab Kings",
    "primaryColor": "#ED1B24",
    "secondaryColor": "#D7C15C",
    "trophies": 0,
    "captainName": "Shreyas Iyer"
  },
  {
    "shortName": "LSG",
    "fullName": "Lucknow Super Giants",
    "primaryColor": "#005087",
    "secondaryColor": "#F9A825",
    "trophies": 0,
    "captainName": "Rishabh Pant"
  }
]

var main = document.querySelector('main');
var sortName = document.querySelector('#sortName');
var fullName = document.querySelector('#fullName');
var trophi = document.querySelector('#trophi');
var caption = document.querySelector('#caption');
var btn = document.querySelector('.btn');
btn.addEventListener("click", function(){
    var i = Math.floor(Math.random()*10);
    main.style.backgroundColor = arr[i].primaryColor;
    sortName.style.backgroundColor = arr[i].secondaryColor;
    sortName.innerHTML = arr[i].shortName;
    fullName.innerHTML = arr[i].fullName;
    trophi.innerHTML = arr[i].trophies;
    caption.innerHTML = arr[i].captainName;
})

