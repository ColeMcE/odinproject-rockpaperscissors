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

function playerOutput (decision) {
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
        return "Error, could not identify player input";
    }
}

console.log(getComputerChoice());
console.log(playerOutput(decision));