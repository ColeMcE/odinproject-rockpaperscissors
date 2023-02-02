let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let compPick;
let decision;
let playerScore = 0;
let compScore = 0;

game(); // Call to start a five round game.

function game() { // Plays a game of five rounds.
    for (let i = 0; i < 5; i++) {
        playRound();
     }
     if (playerScore > compScore) {
        console.log("Congrats! You won with a score of: " + playerScore + " points.")
     }
     else if (compScore > playerScore) {
        console.log("Sorry, the computer won with a score of: " + compScore + " points.")
     }
     else if (compScore == playerScore) {
        console.log("Welp, it was a tie overall with " + playerScore + " points.")
     }
     else {
        console.log("error: failed to tally points total.")
     }
}

function playRound() { // Play one round
    getComputerChoice();
    decision = (prompt("Rock, Paper, or Scissors").toLowerCase());
    console.log("You picked: " + decision);
    console.log("The computer picked: " +  compPick + " so...");
    playGame(decision);
    console.log("Your score: " + playerScore + " points, computer score: " + compScore + " points.")

}

function getComputerChoice() { //Generates a computer decision
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

function playerChoice (decision) { //Translates user inputs
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

function playGame (playerChoice) { //Logic of game
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
        console.log("Hey! Rock, paper, or scissors idiot.");
    }

}

function checkRock() { //Supplemental function for playGame
    if (compPick === rock) {
            console.log("Shame, it's a tie.");
            playerScore++;
            compScore++;
        }
    else if (compPick === scissors) {
            console.log("You win this round!");
            playerScore++;
    }
    else {
            console.log("Sorry... you lose this one.")
            compScore++;
    }
    
}

function checkPaper() { //Supplemental function for playGame
    if (compPick === paper) {
            console.log("Shame, it's a tie.");
            playerScore++;
            compScore++;
        }
    else if (compPick === rock) {
            console.log("You win this round!");
            playerScore++;
    }
    else {
            console.log("Sorry... you lose this one.")
            compScore++;
    }
    
}

function checkScissors() { //Supplemental function for playGame
    if (compPick === scissors) {
            console.log("Shame, it's a tie.");
            playerScore++;
            compScore++;
        }
    else if (compPick  === paper) {
            console.log("You win this round!");
            playerScore++;
    }
    else {
            console.log("Sorry... you lose this one.")
            compScore++;
    }
    
}

//console.log(getComputerChoice());
//console.log(playerChoice(decision));