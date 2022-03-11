'use strict';
//selecting elements
const  score0El = document.getElementById("score-0");
const  score1El = document.getElementById("score-1");
const  dice0El = document.getElementById("dice-0");
const  dice1El = document.getElementById("dice-1");
const  btnNewEl = document.querySelector("btn-new");
const  btnRollEl = document.querySelector("btn-roll");
const  btnHoldEl = document.querySelector("btn-hold");
const scoreSet = document.querySelector(".scoreset");
const player0El = document.querySelector(".player-0-panel");
const player1El = document.querySelector(".player-1-panel");
const name0El = document.getElementById("name-0");
const name1El = document.getElementById("name-1");

//starting conditions
 const Scores = [] ;
score0El.textContent = 0;
score1El.textContent = 0;
let activePlayer;
let currentScores;

function start() {
  gamePlaying = true;
  Scores = [0, 0];
  current
  activePlayer = 0;


  dice0El.style.display = "none";
  dice1El.style.display = "none";

  score0El.textContent = 0;
  document.getElementById("current-0").textContent = 0;
  score1El.textContent = 0;
  document.getElementById("current-1").textContent = 0;
  name0El.textContent = "Player 1";
  name1El.textContent = "Player 2";
  player0El.classList.remove("winner");
  player1El.classList.remove("winner");
  player0El.classList.remove("active");
  

  document.querySelector(".player-0-panel").classList.add("active");
}






function nextPlayer(){
  
  activePlayer === 0? activePlayer = 1: activePlayer = 0;
  roundScores = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".player-0-panel").classList.toggle("active");

  document.getElementById("dice-0").style.display = "none";
  document.getElementById("dice-1").style.display = "none";

};
document.querySelector(".btn-hold").addEventListener("click",start);
