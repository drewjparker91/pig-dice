// Business Logic for players
function Player() { 
  this.overallScore = 0;
  this.turnScore = 0;
  this.roll = 0;
 }

// Generate a random number and push random number to turnScore
Player.prototype.rollDice = function () { 
  let random = Math.floor((Math.random() * 6) + 1);
  this.roll = random;
  this.turnScore += this.roll;
}



Player.prototype.addScore = function() {
  this.overallScore += this.turnScore 
  if (this.overallScore >= 100) {
    return true;
  } else {}
}

Player.prototype.winner = function() {
  for (i = 0; i < this.overallScore; i++) {
    if (this.overallScore == 100) {
      break
      
    }
    
  }
  console.log("winner");
  // console.log("we got it")
}


// User Interface Logic
let player1 = new Player();
let player2 = new Player();

$(document).ready(function() {
  // $("button#hold").attr("disabled", true);
  // $("button#roll").attr("disabled", true);
  // let player1Win = $("#winner");
  // let string = Object.values(player1);
  // player1.winner(string);
  // player1Win.text(player1.winner);
  
  $("button#roll").click(function(event) {
    event.preventDefault();
    let player1Roll = $("#player1Roll");
    let player1TurnScore = $("#player1TurnScore");
    let string = Object.values(player1);
    player1.rollDice(string);
    player1Roll.text(player1.roll);
    player1TurnScore.text(player1.turnScore);
  }); 

    $("button#hold").click(function(event) {
      event.preventDefault();
      player1.addScore(Object.values(player1));
      $("#output").text("Overall Score: " + player1.overallScore);
    
  }); 

  if (player1.overallScore >= 100) {
    console.log("winner");
  } else {}
    // event.preventDefault();
  
  
});