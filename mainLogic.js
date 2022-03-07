game();

function game(){
    let score = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("What symbol you want to use? (Rock, Paper or Scissors)");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection,computerSelection);
        if(isNaN(result)){
            break;
        }
        score += result;

        printResult(result,playerSelection,computerSelection);

        console.log(`Current score: ${score}`);
    }
}

function computerPlay(){
    let choice = Math.floor(Math.random()*3);
    switch (choice){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            console.warn("Something went very wrong");
            return undefined;
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = fixPlayerInput(playerSelection);
    if(playerSelection === computerSelection){
        return 0;
    } else if(playerSelection === 'Rock'){
        return isPlayerWinner(computerSelection,'Scissors');
    } else if(playerSelection === 'Paper'){
        return isPlayerWinner(computerSelection,'Rock');
    } else if(playerSelection === 'Scissors'){
        return isPlayerWinner(computerSelection,'Paper');
    } else {
        console.log('Incorrect input!');
        return undefined;
    }
}

function isPlayerWinner(computerSelection, loosingComputerSelection){
    if(computerSelection === loosingComputerSelection){
        return 1;
    } else {
        return -1;
    }
}

function printResult(result, playerSelection, computerSelection){
    if(result === 1){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    } else if(result === -1){
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
    } else {
        console.log('Draw');
    }
}

function fixPlayerInput(playerSelection){
    return `${playerSelection.substring(0,1).toUpperCase()}${playerSelection.substring(1).toLowerCase()}`
}