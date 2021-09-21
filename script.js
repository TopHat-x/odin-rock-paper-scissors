let round = 1;
let computerScore = 0;
let playerScore = 0;
let computerChoice;
let playerChoice;
let roundWinner;

const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const roundText = document.querySelector("#round");
const results = document.querySelector("#results");

const rockButton = document.querySelector("#rock-button");
rockButton.addEventListener("click", () => playRound("rock"));

const paperButton = document.querySelector("#paper-button");
paperButton.addEventListener("click", () => playRound("paper"));

const scissorsButton = document.querySelector("#scissors-button");
scissorsButton.addEventListener("click", () => playRound("scissors"));

const hodorButton = document.querySelector("#hodor-button");
hodorButton.addEventListener("click", hodor);
hodorButton.addEventListener("click", () => hodor("Hodor")); /* This works */
/* hodorButton.addEventListener("click", hodor("Hodor")); /* This doesn't work */
/* hodorButton.addEventListener("click", ("Hodor") => hodor()); /* This doesn't work */

function updateScore() {
    playerScoreText.textContent = "PLAYER: " + playerScore;
    computerScoreText.textContent = "COMPUTER: " + computerScore;
    roundText.textContent = "ROUND " + round;

    if(computerScore >= 3){
        results.textContent = "COMPUTER WINS!!!";
    } else if (playerScore >=3){
        results.textContent = "YOU'RE WINNER!";
    }

}

function computerPlay() {
    let computerNumber = randomInt(3);
    let computerChoice;

    if (computerNumber === 0) {
        computerChoice = 'rock';
    } else if (computerNumber === 1) {
        computerChoice = 'paper';
    } else if (computerNumber === 2) {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let winner;
    if (playerSelection === 'rock'){
        if (computerSelection === 'rock'){
            results.textContent ='You both chose rock. Tie!';
        } else if (computerSelection === 'paper'){
            results.textContent ='You chose rock, and computer chose paper. Computer wins!';
            computerScore++;
            round++;
            updateScore()
        } else if (computerSelection === 'scissors'){
            results.textContent ='You chose rock, and computer chose scissors. You\'re winner!';
            playerScore++;
            round++
            updateScore()
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            results.textContent ='You chose paper, and computer chose rock. You win!';
            playerScore++;
            round++
            updateScore()
        } else if (computerSelection === 'paper') {
            results.textContent ='You both chose paper. Tie!';
        } else if (computerSelection === 'scissors') {
            results.textContent ='You chose paper, and computer chose scissors. Computer wins!';
            computerScore++;
            round++;
            updateScore()
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            results.textContent ='You chose scissors, and computer chose rock. Computer wins!';
            computerScore++;
            round++;
            updateScore()
        } else if (computerSelection === 'paper') {
            results.textContent ='You chose scissors, and computer chose paper. You win!';
            playerScore++;
            round++
            updateScore()
        } else if (computerSelection === 'scissors') {
            results.textContent ='You both chose scissors. Tie!';
        }
    }
}

function hodor(hodorIn) {
    if(hodorIn === "Hodor"){
        console.log("Hodor");
    } else {
        console.log(":(");
    }

}



