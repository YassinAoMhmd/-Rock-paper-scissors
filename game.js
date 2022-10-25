let computerWins = 0;
let playerWins = 0;

let Brock = document.getElementById("rock");

Brock.addEventListener("click", () => {
    playRound("rock");
});


let Bpaper = document.getElementById("paper");

Bpaper.addEventListener("click", () => {
    playRound("paper");
});


let Bscissors = document.getElementById("scissors");

Bscissors.addEventListener("click", () => {
    playRound("scissors");
});

function playRound(playerChoice) {

    let computerChoice = getComputerChoice();

    winner = winnerGame(playerChoice, computerChoice);

    choices.innerHTML = "The player has chosen " + playerChoice + ", The computer has chosen " + computerChoice;

    if (winner == playerChoice) {
        result.innerHTML = "The player is the winner because the " + playerChoice + " wins to " + computerChoice;
    } else if (winner == computerChoice) {
        result.innerHTML = "The computer is the winner because the " + computerChoice + " wins to " + playerChoice;
    } else if (winner == 0) {
        result.innerHTML = "There is no winner, you have reached a draw";
    }

    if (computerWins == 5) {
        game.innerHTML = "¡¡¡The computer win the game, Computer reach 5 points!!!";
        computerWins = 0;
        playerWins = 0;
    } else if (playerWins == 5) {
        game.innerHTML = "¡¡¡You win the game, You reach 5 points!!!";
        computerWins = 0;
        playerWins = 0;
    }else{
        game.innerHTML="";
    }
}

function getComputerChoice() {
    var x = Math.floor(Math.random() * 3);

    if (x == 0) {
        return "rock";
    } else if (x == 1) {
        return "paper";
    } else if (x == 2) {
        return "scissors";
    }
}

function checkPlayerChoice(finalChoice) {
    if (finalChoice == "rock" || finalChoice == "paper" || finalChoice == "scissors") {
        return 0;
    } else {
        return -1;
    }
}

function winnerGame(playerChoice, computerChoice) {
    let checker = checkPlayerChoice(playerChoice);

    if (checker == -1) {
        return -1;
    }

    if (playerChoice == computerChoice) {
        return 0;
    } else if (playerChoice == "rock" & computerChoice == "scissors") {
        playerWins++;
        return playerChoice;
    } else if (playerChoice == "paper" & computerChoice == "rock") {
        playerWins++;
        return playerChoice;
    } else if (playerChoice == "scissors" & computerChoice == "paper") {
        playerWins++;
        return playerChoice;
    } else {
        computerWins++;
        return computerChoice;
    }
}
let choices = document.getElementById("playerComputerChoice");
let result = document.getElementById("winner");
let game = document.getElementById("finalGame");
