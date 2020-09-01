 # _Pig Dice Game_

#### _A two player game of pig dice, 09/01/2020_

#### By _Jeff Dinsmore & Drew Parker_

## Description

_The is a two player game that starts with player 1. The player clicks roll the dice button and they will see a random number generated in their turn total. This player can continue to roll ro click hold to add that value to their overall score. If they roll a one on the dice their turn ends and the next player is the active player. If the current player clicks the hold button, the turn total is added to their overall score and their turn ends. _

Describe: pigDice()

Spec 1: The program resets when the Restart Game button is clicked
* Input: click Restart Game button
* Output: all scores go to 0 and the game restarts

Spec 2: The program starts the game with one active player

Spec 3: The program returns a random number between 1 and 6 when user clicks on roll button for the first time
* Input: click roll button
* Output: random number between 1 and 6

Spec 4: The program returns a number that adds the previous number to a new random number between 1 and 6 when user clicks on roll button
* Input: click roll button again after first click with turn total of 3
* Output: turn total is now 8 - adds random number of 5 to previous turn total of 3

Spec 5: The program takes the turn total for that player and adds it to their overall score after pressing the hold button and returns turn total back to zero
* Input: click hold button when turn total is 7 and overall score is zero
* Output1: Turn total = 0
* Output2: Overall score = 7

Spec 6: The program ends a players turn when the hold button is clicked
* Input: click hold button
* Output: scores are updated and ends the current players turn and activates the next player

Spec 7: The program ends the players turn if a 1 is rolled and returns their turn total to zero
* Input: click roll and rolled a 1
* Output: 0 is diplayed on turn total ending the current players turn and activating the next player

Spec 8: The program declares a winner when one player reaches 100 first and the game stops


## Setup/Installation Requirements

* _Clone this repository._
* _In the cloned folder, double click on index or index.html. If the file doesn't open, right click on index or index.html and "open with" your browser of choice._

## Known Bugs

_Not bugs at the moment._

## Support and contact details

_Any known issues, please reach out to Jeff Dinsmore by email at hello@jeffdinsmore.com._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _jQuery_
* _JavaScript_

## License

Copyright (c) 2020, **_Jeff Dinsmore_**

This software is licensed under the MIT license.