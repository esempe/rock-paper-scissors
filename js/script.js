


computerPlay = function () {

    computerMoveInt = Math.floor(Math.random() * 3);
    if (computerMoveInt === 0) {
        computerMoveString = 'Rock';
    } else if (computerMoveInt === 1) {
        computerMoveString = 'Paper';
    } else {
        computerMoveString = 'Scissors';
    }
    return computerMoveString
}

round = function (playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt('Pick your weapon;', 'Rock/Paper/Scissors');

    if (computerSelection === 'Rock' && playerSelection == 'Paper' ){
        roundResult = 'You win, Paper beats Rock';
    } else if (computerSelection === 'Paper' && playerSelection == 'Paper' ){
        roundResult = 'Draw';
    } else if (computerSelection === 'Scissors' && playerSelection == 'Paper' ){
        roundResult = 'You Lose, Scissors beats Paper'
    } else if (computerSelection === 'Scissors' && playerSelection == 'Scissors' ){
        roundResult = 'Draw';
    }  else if (computerSelection === 'Paper' && playerSelection == 'Scissors' ){
        roundResult = 'You win, Scissors beats Paper'
    } else if (computerSelection === 'Rock' && playerSelection == 'Scissors' ){
        roundResult = 'You lose, Rock beats Scissors';
    } else if (computerSelection === 'Rock' && playerSelection == 'Rock' ){
        roundResult = 'Draw';
    } else if (computerSelection === 'Paper' && playerSelection == 'Rock' ){
        roundResult = 'Draw';
    } else if (computerSelection === 'Scissors' && playerSelection == 'Rock' ){
        roundResult = 'Draw';
    }
    return roundResult;
}

console.log(round())

