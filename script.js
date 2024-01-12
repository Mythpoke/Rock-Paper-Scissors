
let container = document.querySelector("#container");
const buttons = container.querySelectorAll('button');
let reset = document.querySelector("#reset");
let computer = 0;
let human = 0;

let currentResult = document.querySelector("#currentResult");
let result = document.querySelector("#result");
let winner = document.querySelector("#winner");
let humanCounter = document.querySelector("#human");
let computerCounter = document.querySelector("#computer");

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        game(playRound(button.id, getComputerChoice()));
    });
});

playAgain();

function game(value) {

    if(value === "It's a tie") {
        return "Try again";
    }
    else if(value === "you won") {
        ++human;
        humanCounter.textContent = "Human: " + human;
    }
    else {
        ++computer;
        computerCounter.textContent = "Computer: " + computer;
    }

   if(computer === 5 || human === 5) {
        getWinner(computer, human);
   }
}

function playRound(playerSelection, computerSelection) {

    

    if(playerSelection === computerSelection) {
        currentResult.textContent = "tie";
        return "It's a tie";
    }
    else if(playerSelection === "rock" && computerSelection === "scissors") {
        currentResult.textContent = "You Win! rock beats scissors";
        return "you won";
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        currentResult.textContent = "You Win! paper beats rock";
        return "you won";
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        currentResult.textContent = "You Win! scissors beats paper";
        return "you won";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        currentResult.textContent = "You Lose! rock beats scissors";
        return "you lose";
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        currentResult.textContent = "You Lose! paper beats rock";
        return "you lose";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        currentResult.textContent = "You Lose! scissors beats paper";
        return "you lose";
    }
}

function getWinner(computer, human) {

    disableButtons();

    if(computer === 5) {
        winner.textContent = "Computer won!";
    }
    else {
        winner.textContent = "Human won!";
     }
} 

function playAgain() {
        
    reset.addEventListener('click', () => {
        humanCounter.textContent = "Human: 0";
        computerCounter.textContent = "Computer: 0";
        currentResult.textContent = "";
        winner.textContent = "";
        computer = 0;
        human = 0;
        ableButtons();
    })
}

function getComputerChoice() {

    let result = Math.floor(Math.random() * 3);
    
    if(result === 0) {
         return "rock";
    }
    else if(result === 1) {
         return "paper";
    }
    else return "scissors";
 }

function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    })
}

function ableButtons() {
    buttons.forEach((button) => {
        button.disabled = false;
    })
}
