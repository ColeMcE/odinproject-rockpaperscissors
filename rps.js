//Declaring Variables
let rock = document.getElementById("rockButton").value;
let paper = document.getElementById("paperButton").value;
let scissors = document.getElementById("scissorsButton").value;
const playerButtons = document.querySelectorAll('.playerButtons button');
let decision;
let compPick;
let playerScore = 0;
let compScore = 0;
let clickCount = 0;
const resetButton = document.getElementById("reset");

//Reset button
resetButton.addEventListener("click", ()=> {
    playerScore = 0;
    compScore = 0;
    clickCount = 0;
    document.getElementById("rockButton").disabled = false;
    document.getElementById("paperButton").disabled = false;
    document.getElementById("scissorsButton").disabled = false;
});

//Adding event listener to each button, 
playerButtons.forEach(playerButton => {
    playerButton.addEventListener("click" , processClick);
});

//Executes one round of the game on a button click
function processClick(){
    //Plays a round for the first five clicks
    if (clickCount < 5) {
        getComputerChoice();
        decision = this.value;
        playRound(decision);
        console.log("You picked: " + decision);
        console.log("The computer picked: " +  compPick + " so...");
        console.log("Your score: " + playerScore + " points, computer score: " + compScore + " points.")
        clickCount++;
        //After five clicks tallys total and disables the buttons
        if (clickCount == 5){
            document.getElementById("rockButton").disabled = true;
            document.getElementById("paperButton").disabled = true;
            document.getElementById("scissorsButton").disabled = true;
            tallyTotal();
        } 
    } 
}

//Output of results
function tallyTotal() {
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

//Generates a computer decision
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

//Logic of one round of the game
function playRound (decision) { 
    if (decision == rock){
        checkRock();
    }
        
    else if (decision == paper) {
        checkPaper();
    }
        
    else if (decision == scissors) {
        checkScissors();
    }  
    else {
        console.log("Hey! Rock, paper, or scissors idiot.");
    }

}

//Functions to compare the user and computer values
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