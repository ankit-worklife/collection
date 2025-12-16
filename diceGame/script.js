// Random Number
let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;

// Dice image change
let p1Img = document.querySelector(".dice1 img");
p1Img = p1Img.setAttribute("src", `./images/dice${dice1}.png`);

let p2Img = document.querySelector(".dice2 img");
p2Img = p2Img.setAttribute("src", `./images/dice${dice2}.png`);

// Rule of game

if (dice1 > dice2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (dice2 > dice1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
