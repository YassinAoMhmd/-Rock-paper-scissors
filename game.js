let Brock = document.getElementById("rock");
let Bpaper = document.getElementById("paper");
let Bscissors = document.getElementById("scissors");

Brock.addEventListener("click", () => {
    main("rock");
});

Bpaper.addEventListener("click", () => {
    main("paper");
});

Bscissors.addEventListener("click", () => {
    main("scissors");
});



let computerWins = 0;
let playerWins = 0;

function playRound(playerChoice) {

    let computerChoice = getComputerChoice();

    winner = winnerGame(playerChoice, computerChoice);

    if (winner == playerChoice) {
        alert("The player has chosen " + playerChoice);
        alert("The computer has chosen " + computerChoice);
        alert("The player is the winner because the " + playerChoice + " wins to " + computerChoice);
    } else if (winner == computerChoice) {
        alert("The player has chosen " + playerChoice);
        alert("The computer has chosen " + computerChoice);
        alert("The computer is the winner because the " + computerChoice + " wins to " + playerChoice);
    } else if (winner == 0) {
        alert("The player has chosen " + playerChoice);
        alert("The computer has chosen " + computerChoice);
        alert("There is no winner, you have reached a draw");
    } else {
        alert("You have not made any choice or your choice is incorrect");
    }

    result();
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

function result() {
    if (computerWins == 5) {
        alert("5 rounds have been played and the computer is the winner");
        computerWins = 0;
        playerWins = 0;
    } else if (playerWins == 5) {
        alert("5 rounds have been played and you are the winner");
        computerWins = 0;
        playerWins = 0;
    }
}
