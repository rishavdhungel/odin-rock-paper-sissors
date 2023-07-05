// Get random computer choice
// Get player choice

// playround
//     check for conditions
//     update screen values accordingly

//initializing variables
let playerScore = 0;
let computerScore = 0;
let counter = 0;

// Getting random computer choice
const choices = ['rock','paper','scissors']
//add event listner to the three divs
const Selection = document.querySelectorAll(".choice");
console.log(Selection);
let playerChoice;

let getPlayer = function(){
    playerChoice = this.getAttribute('data-playerChoice');
    if (counter <5){
        playRound()
        
    }else{
        if(playerScore > computerScore){
            alert("Player Wins the Game! Click Reset to play again!");
            return;
        }else if (computerScore > playerScore){
            alert("Computer Wins the Game! Click Reset to play again!");
            return;
        }else{
            alert("Its a tie! Click Reset to play again!");
        } 
    }
    }

for (let i = 0; i<Selection.length; i++){
    Selection[i].addEventListener('click',getPlayer);
}

function playRound(){
    console.log(playerChoice);    
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log(computerChoice);

    if(playerChoice == computerChoice){
        console.log("It's a tie");
        counter += 1;
        playerScore += 1;
        console.log("Counter is:",counter);
        console.log("Player Score",playerScore);
        // check()

    }
    else if((playerChoice == "rock" && computerChoice == "scissors")||(playerChoice == "scissors" && computerChoice == "paper")||(playerChoice == "paper" && computerChoice == "rock")){
        // console.log("player win!");
        counter += 1;
        console.log("Counter is:",counter);
        console.log("computer Score",computerScore);
        console.log("Player Score",playerScore);
        // check()
    
    }
    else{
        // console.log('Computer Win');
        counter += 1;
        computerScore += 1;
        console.log("Counter is:",counter);
        console.log("computer Score",computerScore);
        // check()
    }

    function check(){
       
    }
}

