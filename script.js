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
const current0El = document.getElementById("current-0");
const current1El = document.getElementById("current-1");

//starting conditions

const Scores = [] ;
score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;
let activePlayer;
let currentScores;

function start() {
  gamePlaying = true;
  Scores = [0, 0];
  currentScores = 0;
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
  player0El.classList.add("active");
}

start();

//rolling dice functionality
btnRollEl.addEventListener('click', function(){
  
    if (gamePlaying){
  
      // generate a random number
    dice0El = Math.trunc(( Math.random() * 6 )) +1;
      dice1El= Math.trunc(( Math.random() * 6 )) +1;
    
  
      // dice pic shows up
      
      dice0DOM.style.display = "block";
      dice1DOM.style.display = "block";
       
      // relate the random number to the Dice
  
      dice0El.src = `dice - ${dice}.png`;
      dice1El.src = 'dice - ${dice}.png';
      
     if (dice0El !== 1 && dice1El !== 1){
          //Add Score
          currentScores += (dice0El +dice1El); 
          
          document.querySelector('#current-'+activePlayer).textContent = currentScores;
  
  
      }else {
         nextPlayer();
      }
    };
  
  });



document.querySelector(".btn-new").addEventListener("click",start);
 
function scoreSetting (){
   scoreSet = document.getElementById("scoreSetting").value;
   start();
   return scoreSet;

//switching player fuction
function nextPlayer() {
  
  activePlayer === 0? activePlayer = 1: activePlayer = 0;
  roundScores = 0;

  current0El.textContent = "0";
  current1El.textContent = "0";

  
  player1El.classList.toggle("active");
  player0El.classList.toggle("active");

  dice0El.style.display = "none";
  dice1El.style.display = "none";

  
    
  



};
document.querySelector(".btn-hold").addEventListener("click",start);
Scores[activePlayer] += roundScore;

    //update it to UI
    document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer];

    //check if player won the Game
    if (Scores[activePlayer] >= scoreSet) {
      gamePlaying = false;
      document.querySelector("#name-"+activePlayer).textContent = "Winner!";
      document.getElementById("dice-0").style.display = "none";
      document.getElementById("dice-1").style.display = "none";
      document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
      document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");

    } else {
       nextPlayer();
    }