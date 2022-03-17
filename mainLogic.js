const buttons = document.querySelectorAll('button');
buttons.forEach(value => value.addEventListener('click',doButtonSelection));

const scoreView = document.querySelector('#score');
const resultView = document.querySelector('#result');

let playerScore = 0;
let computerScore = 0;

function doButtonSelection(e){
    playRound(e.target.id);
}

function playRound(playerSelection){
    
    let computerSelection = computerPlay();
    let result = getResult(playerSelection,computerSelection);

    if(result === undefined){
        return;
    }

    if(result){
        playerScore++;
    } else if(result!==null){
        computerScore++;
    }

    resultView.textContent = getTextResult(result,playerSelection,computerSelection);
    scoreView.textContent = `Current score: [${playerScore}:${computerScore}]`;

    if(playerScore >= 5){
        resultView.textContent = "YOU WON!";
        resultView.style.color = 'green';
        buttons.forEach(button =>button.removeEventListener('click',doButtonSelection));
    } else if (computerScore >= 5){
        resultView.textContent = "YOU LOST!";
        resultView.style.color = 'red';
        buttons.forEach(button =>button.removeEventListener('click',doButtonSelection));
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

function getResult(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return null;
    } else if(playerSelection === 'Rock'){
        return isPlayerWinner(computerSelection,'Scissors');
    } else if(playerSelection === 'Paper'){
        return isPlayerWinner(computerSelection,'Rock');
    } else if(playerSelection === 'Scissors'){
        return isPlayerWinner(computerSelection,'Paper');
    } else {
        console.log(`Incorrect input! ${playerSelection}`);
        return undefined;
    }
}

function isPlayerWinner(computerSelection, loosingComputerSelection){
    return computerSelection === loosingComputerSelection;
}

function getTextResult(result, playerSelection, computerSelection){
    if(result === true){
        return `Round won! ${playerSelection} beats ${computerSelection}`;
    } else if(result === false){
        return `Round lost! ${computerSelection} beats ${playerSelection}`;
    } else {
        return 'Draw';
    }
}