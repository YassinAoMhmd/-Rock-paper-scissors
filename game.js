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

    if (winner == playerChoice) {
        /*alert("The player has chosen " + playerChoice);
        alert("The computer has chosen " + computerChoice);
        */
        result.innerHTML = "The player is the winner because the " + playerChoice + " wins to " + computerChoice;
    } else if (winner == computerChoice) {
        /*alert("The player has chosen " + playerChoice);
        alert("The computer has chosen " + computerChoice);
        */
        result.innerHTML = "The computer is the winner because the " + computerChoice + " wins to " + playerChoice;
    } else if (winner == 0) {
        /*alert("The player has chosen " + playerChoice);
        alert("The computer has chosen " + computerChoice);
        */
        result.innerHTML = "There is no winner, you have reached a draw";
    }

    if (computerWins == 5) {
        game.innerHTML = "The computer reach 5 points";
        computerWins = 0;
        playerWins = 0;
    } else if (playerWins == 5) {
        game.innerHTML = "You reach 5 points";
        computerWins = 0;
        playerWins = 0;
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

let result = document.getElementById("winner");
let game = document.getElementById("finalGame");
