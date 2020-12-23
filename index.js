// Dice-1 //
var firstRandomNumber = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + firstRandomNumber + ".png";

var firstDiceSource = "images/" + randomDiceImage;

var firstDice = document.querySelectorAll("img")[0];

firstDice.setAttribute("src", firstDiceSource);


// Dice-2 //
var secondRandomNumber = Math.floor(Math.random() * 6) + 1;

var secondDiceSource = "images/" + "dice" + secondRandomNumber + ".png";

document.querySelectorAll("img")[1].setAttribute("src", secondDiceSource);

// Winner //
if (firstRandomNumber > secondRandomNumber) {
    document.querySelector("h1").innerHTML = "😍 Player 1 Won!";
}
else if (firstRandomNumber < secondRandomNumber) {
    document.querySelector("h1").innerHTML = "😎 Player 2 Won!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}