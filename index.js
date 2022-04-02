var diceOne = "images/dice" + Math.ceil(Math.random() * 6) + ".png";
var diceTwo = "images/dice" + Math.ceil(Math.random() * 6) + ".png";


var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")

img1.setAttribute("src", `${diceOne}`);
img2.setAttribute("src", `${diceTwo}`);
if (diceOne === diceTwo){
        document.querySelector("h1").innerHTML = "🏆Its a draw 🏆";
} else if (diceOne > diceTwo) {
        document.querySelector("h1").innerHTML = "🏆Player One Wins";
} else if (diceOne < diceTwo) {
        document.querySelector("h1").innerHTML = "Player Two Wins🏆";
}