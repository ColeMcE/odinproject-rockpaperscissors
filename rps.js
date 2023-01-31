let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

function getComputerChoice() {
    let rng = Math.floor(Math.random()*3)
    if (rng < 1) {
        return "Rock";
    }
    else if (rng <= 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

// console.log(getComputerChoice()); USE THIS TO TEST COMPUTER CHOICE OUTPUT
