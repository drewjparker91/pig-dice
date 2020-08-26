// Business Logic
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

function Player1(overallScore, turnScore) {
  this.overallScore = overallScore;
  this.turnScore = turnScore;
}

function Player2(overallScore2, turnScore2) {
  this.overallScore2 = overallScore2;
  this.turnScore2 = turnScore2;
}

function playGame(){ 
let random = Math.floor(Math.random() * 6) + 1;
// let random2 = Math.floor(Math.random() * 6) + 1;
  return random;
}



$(document).ready(function() {
  
  let turn = playGame();
  console.log(turn);
  // event.preventDefault();
});