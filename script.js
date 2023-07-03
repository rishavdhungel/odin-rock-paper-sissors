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
let computerChoice = choices[Math.floor(Math.random()*choices.length)];
console.log(computerChoice);

//Getting player choice
let  getplayer = function(){
    let playerchoice = this.getAttribute('data-playerChoice');
    console.log(playerchoice);
  }

const playerSelection = document.getElementsByClassName('choice');
for (let i = 0; i<playerSelection.length;i++){

    playerSelection[i].addEventListener('click',getplayer);

}

function playRound(){

  




}




