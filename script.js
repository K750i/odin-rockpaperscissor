function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor']
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    const conditions = new Map([['Rock', 'Scissor'], ['Scissor', 'Paper'], ['Paper', 'Rock']])
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()

    if (playerSelection === computerSelection) {
        return [0, "It's a tie!"]
    } else if (conditions.get(playerSelection) === computerSelection) {
        return [1, `You Win! ${playerSelection} beats ${computerSelection}`]
    } else {
        return [-1, `You Lose! ${computerSelection} beats ${playerSelection}`]
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0

    for (let i = 1; i < 6; i++) {
        console.log(`Round ${i}`)
        const playerInput = prompt('Rock, Paper, or Scissor?')
        const [pts, msg] = playRound(playerInput, getComputerChoice())
        if (pts === 0) {
            console.log(msg)
        } else if (pts > 0) {
            playerScore++
            console.log(msg)
        } else {
            computerScore++
            console.log(msg)
        }
    }

    if (playerScore > computerScore) {
        console.log(`You won the game by ${playerScore} to ${computerScore}`)
    } else {
        console.log(`You lose the game by ${computerScore} to ${playerScore}`);
    }
}