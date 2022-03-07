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
        return 'Draw'
    } else if(playerSelection === 'Rock'){
        return checkWinner(playerSelection,computerSelection,'Scissors');
    } else if(playerSelection === 'Paper'){
        return checkWinner(playerSelection,computerSelection,'Rock');
    } else if(playerSelection === 'Scissors'){
        return checkWinner(playerSelection,computerSelection,'Paper');
    } else {
        return 'Incorrect input!';
    }
}

function checkWinner(playerSelection, computerSelection, loosingComputerSelection){
    if(computerSelection === loosingComputerSelection){
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
}

function fixPlayerInput(playerSelection){
    return `${playerSelection.substring(0,1).toUpperCase()}${playerSelection.substring(1).toLowerCase()}`
}

console.log(playRound('sciSSors',computerPlay()));