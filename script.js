let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('main>button')

const playGame = function () {
  game(this.dataset.choice)
}

buttons.forEach(btn => {
  btn.addEventListener('click', playGame)
})


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

function game(playerInput) {
  const [pts, msg] = playRound(playerInput, getComputerChoice())
  if (pts === 0) {
    displayResult(playerScore, computerScore, msg)
  } else if (pts > 0) {
    playerScore++
    displayResult(playerScore, computerScore, msg)
  } else {
    computerScore++
    displayResult(playerScore, computerScore, msg)
  }
  // }
  if (playerScore >= 5) {
    displayResult(playerScore, computerScore, msg, `You won the game by ${playerScore} to ${computerScore}`)
    buttons.forEach(btn => {
      btn.removeEventListener('click', playGame)
    })
  }

  if (computerScore >= 5) {
    displayResult(playerScore, computerScore, msg, `You lose the game by ${computerScore} to ${playerScore}`)
    buttons.forEach(btn => {
      btn.removeEventListener('click', playGame)
    })
  }
}

function displayResult(player, computer, msg, gameoverMsg) {
  const msgDisplay = document.querySelector('.outcome')
  const playerScoreDisplay = document.querySelector('.player_score')
  const computerScoreDisplay = document.querySelector('.computer_score')
  const gameoverDisplay = document.querySelector('.gameover')

  playerScoreDisplay.textContent = player
  computerScoreDisplay.textContent = computer
  msgDisplay.textContent = msg
  gameoverDisplay.textContent = gameoverMsg
}


