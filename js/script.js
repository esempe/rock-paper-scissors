
let playerScore = 0
let computerScore = 0
let roundWinner = ''
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const result = document.querySelector('.ressult')
const playerScoreUi = document.querySelector('.playerScore')
const compScoreUi = document.querySelector('.compScore')



rockButton.addEventListener('click', () => {
    playRound('rock');
})
paperButton.addEventListener('click', () => {
    playRound('paper');
})
scissorsButton.addEventListener('click', () => {
    playRound('scissors');
})

getRandomChoice = () => {
    randomInt = Math.floor(Math.random() * 3);
    switch (randomInt) {
        case 0:
            return 'rock'
        case 1:
            return 'scissors'
        case 2:
            return 'paper'
    }
}

const computerSelection = getRandomChoice()
playRound = (playerSelection, computerSelection) => {
    computerSelection = getRandomChoice()
    if (playerSelection === computerSelection) {
        roundWinner = 'draw'
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
    return updateScoreMessage(roundWinner,computerSelection,playerSelection,playerScore,computerScore);
}

const updateScoreMessage = (winner,computerSelection,playerSelection, playerScore,computerScore) => {
    if (winner == 'player') {
        result.textContent = `${winner} win: ${playerSelection} beats ${computerSelection}`
        playerScoreUi.textContent =`Player score:${playerScore}`

    } else if (winner == 'computer') {
        result.textContent = `${winner} win: ${computerSelection} beats ${playerSelection}`
        compScoreUi.textContent =`Computer score:${computerScore}`

    } else if (winner == 'draw') {
        result.textContent = `${winner} ${computerSelection} and ${playerSelection}`
    }


}

console.log(playRound('ROCK'))