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

function addRoll() {
  const array = [];
  array.push(playGame());
  let sum = 0;
  // let oldSum;
  // let newSum;
  array.forEach(function(numberToAdd) {
    let oldSum = sum;
    sum = sum + numberToAdd;
    let newSum = sum;
});
}


$(document).ready(function() {
  // $("#game").on("click", )
  
  let turn = playGame();
  let turnTotal = addRoll();
  $("button").click(function() {
    console.log(playGame());
  // event.preventDefault();
  });
});





// function attachContactListeners() {
//   $("ul#contacts").on("click", "li", function() {
//     console.log("The id of this <li> is " + this.id + ".");
//   });
// };