//This game is going to be played from console

//player will play against computer
//write getComputerChoice function to return random choices.
//function that plays single round takes playerSelection and computerSelection and return reslut
//make user input case insensitive
//write function game() to play 5 round of game

//getting computerSelection
let choices = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){

    computerChoice = choices[(Math.floor(Math.random()*choices.length))];
    console.log(computerChoice);
    return computerChoice;
}

computerSelection = getComputerChoice();

//getting player selection from console
    
let playerSelection = prompt("Pick your choice:Rock, Paper, Scissors");
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);


