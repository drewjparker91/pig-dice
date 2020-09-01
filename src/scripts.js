// Business Logic for players
export default function Player() { 
  this.overallScore = 0;
  this.turnScore = 0;
  this.roll = 0;
}
// test
// Generate a random number and push random number to turnScore
Player.prototype.rollDice = function () { 
  let random = Math.floor((Math.random() * 6) + 1);
  this.roll = random;
  // this.turnScore += this.roll;
};

// Player.prototype.addScore = function() {
//   this.overallScore += this.turnScore; 
// };

// Player.prototype.winner = function() {
 
// };


// User Interface Logic
// let player1 = new Player();
// let player2 = new Player();

// $(document).ready(function() {

//   $("button#roll1").click(function(event) {
//     event.preventDefault();
//     $("#loseTurn").hide();
//     let player1Roll = $("#player1Roll");
//     let player1TurnScore = $("#player1TurnScore");
//     let string = Object.values(player1);
//     player1.rollDice(string);
//     player1Roll.text(player1.roll);
//     player1TurnScore.text(player1.turnScore);
//     if (player1.roll === 1) {
//       $("button#hold1").attr("disabled", true);
//       $("button#roll1").attr("disabled", true);
//       $("button#hold2").removeAttr("disabled", true);
//       $("button#roll2").removeAttr("disabled", true);
//       player1.turnScore = 0;
//       $("#loseTurn").show();
//     } else { }
//   }); 
//   $("button#hold1").click(function(event) {
//     event.preventDefault();
//     player1.addScore(Object.values(player1));
//     $("#output1").text("Overall Score: " + player1.overallScore);
//     $("button#hold1").attr("disabled", true);
//     $("button#roll1").attr("disabled", true);
//     $("button#hold2").removeAttr("disabled", true);
//     $("button#roll2").removeAttr("disabled", true);
//     player1.turnScore = 0;
    
//     if (player1.overallScore >= 100) {     
//       $("button#hold1").attr("disabled", true);
//       $("button#roll1").attr("disabled", true);
//       $("button#hold2").attr("disabled", true);
//       $("button#roll2").attr("disabled", true);
//       $("#winner").text("Player 1, You are the Winner!");
//     } else {}
//   }); 

//   $("button#roll2").click(function(event) {
//     event.preventDefault();
//     $("#loseTurn").hide();
//     let player2Roll = $("#player2Roll");
//     let player2TurnScore = $("#player2TurnScore");
//     let string = Object.values(player2);
//     player2.rollDice(string);
//     player2Roll.text(player2.roll);
//     player2TurnScore.text(player2.turnScore);
//     if (player2.roll === 1) {
//       $("button#hold2").attr("disabled", true);
//       $("button#roll2").attr("disabled", true);
//       $("button#hold1").removeAttr("disabled", true);
//       $("button#roll1").removeAttr("disabled", true);
//       player2.turnScore = 0;
//       $("#loseTurn").show();
//     } else {}
//   }); 

//   $("button#hold2").click(function(event) {
//     event.preventDefault();
//     player2.addScore(Object.values(player2));
//     $("#output2").text("Overall Score: " + player2.overallScore);
//     $("button#hold2").attr("disabled", true);
//     $("button#roll2").attr("disabled", true);
//     $("button#hold1").removeAttr("disabled", true);
//     $("button#roll1").removeAttr("disabled", true);
//     player2.turnScore = 0;
//     if (player2.overallScore >= 100) {     
//       $("button#hold2").attr("disabled", true);
//       $("button#roll2").attr("disabled", true);
//       $("button#hold1").attr("disabled", true);
//       $("button#roll1").attr("disabled", true);
//       $("#winner").text("Player 2, You are the Winner!");
//     } else {}
//   }); 
  
//   $("#playGame").click(function(event) {
//     $("#game").show();
//     $("#playGame").hide();
//     $("#restartGame").show();
//     // $("#player1").css("background-color", "#FDE7E2");
//   });
//   $("#restartGame").click(function(event) {
//     location.reload();
//   });
// });