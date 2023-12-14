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
    let random;
    random = Math.round(Math.random() * 2 + 1);

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

    if (playerSelection === computerSelection) {
        return "Tie";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
             playerSelection === "scissors" && computerSelection === "paper" ||
             playerSelection === "paper" && computerSelection === "rock") {
        return "You won";
    }
    else {
       return "You lose";
    }
}


