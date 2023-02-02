let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let compPick;

function getComputerChoice() {
    let rng = Math.floor(Math.random()*3)
    if (rng < 1) {
        compPick = rock;
        return compPick;
    }
    else if (rng <= 1) {
        compPick = paper;
        return compPick;
    }
    else {
        compPick = scissors;
        return compPick;
    }
}

getComputerChoice();
let decision = (prompt("Rock, Paper, or Scissors").toLowerCase());

function playerChoice (decision) {
    if (decision === rock) {
        decision = rock;
        return decision;
    }
    else if (decision === paper) {
        decision = paper;
        return decision;
    }
    else if (decision === scissors) {
        decision = scissors;
        return decision;
    }
    else {
        return "Error, please pick 'rock' 'paper' or 'scissors'";
    }
}

function playGame (playerChoice) {
    if (decision === rock){
        checkRock();
    }
        
    else if (decision === paper) {
        checkPaper();
    }
        
    else if (decision === scissors) {
        checkScissors();
    }  
    else {
        console.log("error: could not determine players choice");
    }

}


console.log("You picked: " + decision);
console.log("The computer picked: " +  compPick + " so...");
playGame(decision);

function checkRock() {
    if (compPick === rock) {
            console.log("Shame, it's a tie.");
        }
    else if (compPick === scissors) {
            console.log("You win!");
    }
    else {
            console.log("Sorry... you lose.")
    }
    
}

function checkPaper(playerChoice) {
    if (compPick === paper) {
            console.log("Shame, it's a tie.");
        }
    else if (compPick === rock) {
            console.log("You win!");
    }
    else {
            console.log("Sorry... you lose.")
    }
    
}

function checkScissors(playerChoice) {
    if (compPick === scissors) {
            console.log("Shame, it's a tie.");
        }
    else if (compPick  === paper) {
            console.log("You win!");
    }
    else {
            console.log("Sorry... you lose.")
    }
    
}

//console.log(getComputerChoice());
//console.log(playerChoice(decision));