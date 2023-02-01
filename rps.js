let rock = "rock";
let paper = "paper";
let scissors = "scissors";

function getComputerChoice() {
    let rng = Math.floor(Math.random()*3)
    if (rng < 1) {
        return rock;
    }
    else if (rng <= 1) {
        return paper;
    }
    else {
        return scissors;
    }
}

let decision = (prompt("Rock, Paper, or Scissors").toLowerCase());

function playerChoice (decision) {
    if (decision === rock) {
        return rock;
    }
    else if (decision === paper) {
        return paper;
    }
    else if (decision === scissors) {
        return scissors;
    }
    else {
        return "Error, please pick 'rock' 'paper' or 'scissors'";
    }
}

//console.log(getComputerChoice());
//console.log(playerChoice(decision));