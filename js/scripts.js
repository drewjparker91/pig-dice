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

let xArray = [];
function addRoll(num) {
  xArray.push(num);
  let sum = 0;
  let oldSum;
  let newSum;
  xArray.forEach(function(numberToAdd) {
    oldSum = sum;
    sum = sum + numberToAdd;
    newSum = sum;
  });
  return newSum;
}


$(document).ready(function() {
  let = sum = 0;
  let turn = playGame();
  // let turnTotal = addRoll(turn, turn);
  
  // console.log(xArray);
  $("button").click(function() {
      // console.log(sum += 1 + playGame());
      
      let Roll = playGame();
      let nextRoll = addRoll(Roll);
      console.log(nextRoll);
      
      // console.log(newSum);
    // console.log(generate())
    // event.preventDefault();
  });
  
});





// function attachContactListeners() {
//   $("ul#contacts").on("click", "li", function() {
//     console.log("The id of this <li> is " + this.id + ".");
//   });
// };