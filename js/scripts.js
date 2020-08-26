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

function addRoll(num1, num2) {
  return num1 + num2;
}
// Trying to generate with this function
function generate() {
  let result = [];
 let sum = 0;
 let newSum = sum += 1
 result.push(newSum;
 return result;
}


$(document).ready(function() {
  // $("#game").on("click", )
  let = sum = 0;
  let turn = playGame();
  let turnTotal = addRoll(turn, turn);
  // let result = generate();

  $("button").click(function() {
    //  console.log(sum += 1 + playGame());
    // console.log(playGame() + generate());
    console.log(generate())
    
  // event.preventDefault();
  });
});





// function attachContactListeners() {
//   $("ul#contacts").on("click", "li", function() {
//     console.log("The id of this <li> is " + this.id + ".");
//   });
// };