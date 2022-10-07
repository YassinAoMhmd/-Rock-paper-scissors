let computerWins = 0;
let playerWins = 0;

function main(playerChoice){
    for (let step = 0; step < 5; step++) {
        playerChoice = prompt("Enter your choice Rock, Paper, Scissors");
        playerChoice = playerChoice.toLowerCase();
        let computerChoice = getComputerChoice();

        console.log("The player has chosen " + playerChoice);
        console.log("The computer has chosen " + computerChoice);

        winner = winnerGame(playerChoice, computerChoice);

        if (winner == playerChoice) {
            console.log("The player is the winner because the " + playerChoice + " wins to " + computerChoice);
        } else if (winner == computerChoice) {
            console.log("The computer is the winner because the " + computerChoice + " wins to " + playerChoice);
        } else if (winner == 0) {
            console.log("There is no winner, you have reached a draw");
        } else {
            console.log("You have not made any choice or your choice is incorrect");
        }
    }
}
function getComputerChoice(){
    var x = Math.floor(Math.random()*3);

    if(x==0){
        return "rock";
    }else if(x==1){
        return "paper";
    }else if(x==2){
        return "scissors";
    }
}

function checkPlayerChoice(finalChoice){
    if (finalChoice == "rock" || finalChoice == "paper" || finalChoice == "scissors"){
        return 0;
    }else{
        return -1;
    }
}

function winnerGame(playerChoice,computerChoice){
    let checker = checkPlayerChoice(playerChoice);

    if(checker == -1){
        return -1;
    }
    
    if(playerChoice == computerChoice){
        return 0;
    }else if(playerChoice=="rock" & computerChoice=="scissors" ){
        playerWins++;
        return playerChoice;
    }else if(playerChoice=="paper" & computerChoice=="rock"){
        playerWins++;
        return playerChoice;
    }else if(playerChoice=="scissors" & computerChoice=="paper"){
        playerWins++;
        return playerChoice;
    }else {
        computerWins++;
        return computerChoice;
    }
}

function result(){
    if(computerWins > playerWins){
        console.log("The computer is the winner");
    }else if (playerWins > computerWins){
        console.log("You are the winner");
    }else{
        console.log("There is a draw");
    }
}
