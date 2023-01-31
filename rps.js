let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

function getComputerChoice() {
    let rng = Math.floor(Math.random()*3)
    console.log(rng);
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

console.log(getComputerChoice());