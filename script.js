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

function playerSelect() {
    let playerChoice;
    while (true) {
        playerChoice = prompt("Choose rock, paper, or scissors!");
        playerChoice = playerChoice.toLowerCase();
    
        if (playerChoice === 'rock'||playerChoice === 'paper'||playerChoice === "scissors"){
            break;
        }
    }
    return playerChoice;
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(playerSelection, computerSelection) {
    let winner;
    if (playerSelection === 'rock'){
        if (computerSelection === 'rock'){
            console.log('You both chose rock. Tie!');
            winner = 'Nobody';
        } else if (computerSelection === 'paper'){
            console.log('You chose rock, and computer chose paper. Computer wins!');
            winner = 'Computer';
        } else if (computerSelection === 'scissors'){
            console.log('You chose rock, and computer chose scissors. You\'re winner!');
            winner = 'Player';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log('You chose paper, and computer chose rock. You win!');
            winner = 'Player';

        } else if (computerSelection === 'paper') {
            console.log('You both chose paper. Tie!');
            winner = 'Nobody';
        } else if (computerSelection === 'scissors') {
            console.log('You chose paper, and computer chose scissors. Computer wins!');
            winner = 'Computer';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            console.log('You chose scissors, and computer chose rock. Computer wins!');
            winner = 'Computer';
        } else if (computerSelection === 'paper') {
            console.log('You chose scissors, and computer chose paper. You win!');
            winner = 'Player';
        } else if (computerSelection === 'scissors') {
            console.log('You both chose scissors. Tie!');
            winner = 'Nobody';
        }
    }
    return winner;
}

function game() {
    let round = 1;
    let computerScore = 0;
    let playerScore = 0;
    let computerChoice;
    let playerChoice;
    let roundWinner;

    console.log('This is a best of 5 series of Rock, Paper, Scissors!');

    while (computerScore < 3 && playerScore < 3) {
        console.log('The score is Computer ' + computerScore + ', Player ' + playerScore + '. Round ' + round + ' ... FIGHT!');
        roundWinner = 'Nobody';
        while (roundWinner === 'Nobody'){
            computerChoice = computerPlay();
            playerChoice = playerSelect();
            roundWinner = playRound(playerChoice, computerChoice);
        }
        if (roundWinner === 'Computer'){
            computerScore++;
        } else if (roundWinner === 'Player'){
            playerScore++;
        }
        round++;
    }

    if (computerScore === 3) {
        console.log('GAME OVER. COMPUTER WINS 3 to ' + playerScore);
    } else if (playerScore === 3) {
        console.log('GAME OVER. PLAYER WINS 3 to ' + computerScore);

    }
}