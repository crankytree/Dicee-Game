var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var img1_source = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , img1_source);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img2_source = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" ,img2_source);

var heading = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
  heading.innerHTML = "🚩 Player 1 Wins";
}
else if(randomNumber2 > randomNumber1){
  heading.innerHTML = "Player 2 Wins 🚩";
}
else{
  heading.innerHTML = "Draw !";
}
