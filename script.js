/*
getComputerChoice () {

}
// A function that will randomly return 'Rock', 'Paper' or 'Sissors'.

playRound (playerSelection, computerSelection) {

}
// A function that will return a string that declares the winner.
// An example of return: "You Lose! Paper beats Rock".
// Make playerSelection parameter case-insensitive.
// Account for ties by repeating the round.

game () {

}
// A function will use playRound within. 
// Will play a best-of-fve game.
// The funtion keeps the score
// reports a winner or loser.
*/





function getComputerChoice() {
    let random = Math.round(Math.random() * 2 + 1);

    if (random === 1) {
        return "rock";
    }
    else if (random === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        return "Tie";
    }
    else if (playerSelection === "paper" && computerSelection === "rock" ||
             playerSelection === "rock" && computerSelection === "paper" ||
             playerSelection === "scissors" && computerSelection === "paper") {
                return "You won";
             }
    else {
        return "You lose";
    }
}

function getWinner(human, computer) {

    if (human > computer) {
        console.log("Human won!");
    }
    else if(computer > human) {
        console.log("Computer won!");
    }
    else {
        console.log("It's a tie!");
    }
    
}



function game() {

    let human = 0;
    let computer = 0;

    let choice;
    let result; 

    for(human && computer; 5 > computer && 5 > human;) {

        choice = prompt("Choose rock, paper or scissors").toLowerCase();

        while (!(choice === "rock") && !(choice === "paper") && !(choice === "scissors")) {

        choice = prompt("try again").toLowerCase();

        }

        result = playRound(choice, getComputerChoice());

        while (result === "Tie") {

        choice = prompt("Choose rock, paper or scissors").toLowerCase();
        result = playRound(choice, getComputerChoice());
        }

        if (result === "You won") {
            human++;
            let max;
            let min;
            if (computer > human) {
                max = computer;
                min = human;
            }
            else {
                max = human;
                min = computer;
            }
            if (min === max) {
                console.log("Human wins the round " + "It's " + max + ":" + min + " for both players.");
            }
            else if (max === human) {
                console.log("Human wins the round " + "It's " + max + ":" + min + " for the human.");
            }
            else {
                console.log("Human wins the round " + "It's " + max + ":" + min + " for the computer.");
            }
            
        }
        else if (result === "You lose") {
            computer++
            let max;
            let min;
            if (computer > human) {
                max = computer;
                min = human;
            }
            else {
                max = human;
                min = computer;
            }
            if (min === max) {
                console.log("Computer wins the round " + "It's " + max + ":" + min + " for both players.");
            }
            else if (max === human) {
                console.log("Computer wins the round " + "It's " + max + ":" + min + " for the human.");
            }
            else {
                console.log("Computer wins the round " + "It's " + max + ":" + min + " for the computer.");
            }
            
            
        }
        console.log(human);
        console.log(computer);
 }


    

    getWinner(human, computer);

}

game();
