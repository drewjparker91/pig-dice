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
  this.overallScore += this.turnScore;
}


// User Interface Logic
let player1 = new Player();
let player2 = new Player();

$(document).ready(function() {
  
  $("#roll").click(function(event) {
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
    // event.preventDefault();
  
  
});