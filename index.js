
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomDiceImage = "dice" + randomNumber1 + ".jpg";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0]; // 0 is the first of the "img" array
image1.setAttribute("src", randomImageSource);
var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomImageSource2 = "images/dice"+ randomNumber2 + ".jpg";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
if(randomNumber1 > randomNumber2){
  document.querySelectorAll("h1")[0].innerHTML = "🚩Player 1 Wins!"
}else if (randomNumber1 < randomNumber2){
  document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins!🚩"
}else (
  document.querySelectorAll("h1")[0].innerHTML = "Draw!"
)
