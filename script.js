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
let counter = 0;

function getComputerChoice(){

    computerChoice = choices[(Math.floor(Math.random()*choices.length))];

    return computerChoice;
}

computerSelection = getComputerChoice();

//getting player selection from console

function playRound(){

    let playerSelection = prompt("Pick your choice:rock/paper/scissors");
    let lowerplayerSelection = playerSelection.toLowerCase();


    //check the winner of the game
    //Rock beats scissors, scissors beat paper, and paper beats rock.
    console.log(lowerplayerSelection);
    console.log(computerSelection);
    if(lowerplayerSelection==computerSelection){
        console.log("Its a tie");
        counter += 1;

    }
    else if((lowerplayerSelection=="rock" && computerSelection == "scissors")||(lowerplayerSelection=="scissors" && computerSelection == "paper")||(lowerplayerSelection=="paper" && computerSelection == "rock")){
        console.log("Player Wins");
        playerScore += 1;
        counter += 1;
        if (playerScore == 5){
            alert("Player Wins the Game");
            return;
            
        }
    }else{
        console.log("Computer Wins!");
        computerScore += 1;
        counter += 1;
        if(computerScore == 5){
            alert("Computer Wins the Game");
            return;

        }
    }

}


while (counter<5){
    playRound()
    console.log(playerScore);
    console.log(computerScore);
}


//initialize counter from zero 
//repeat playround for 5 times
//calculate result
//greater score wins 
//equal score tie