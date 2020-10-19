const store = require('./store')
const ui = require('./games/ui')

let arr = []
let numberOfPlays = 0
let status = false

const gameBoard = function (index) {
  // console.log(index.id)
  // console.log('The game board')
  arr = store.game.cells
  let player
  status = gameStatus()
  const playIndex = $('#' + index.id).data('cellIndex')
  const valid = validPos(playIndex)
  // If the position is valid and the game is not over
  if (valid === true && status === false) {
    numberOfPlays++
    arr[playIndex] = getValue()
    player = arr[playIndex]
    nextPlayer(arr[playIndex])
    ui.onBoxClickSuccess(playIndex, arr[playIndex])
    // If the position is invalid and the game is not over
  } else if (valid === false && status === false) {
    console.log('This position is invalid')
    return false
  }
  status = gameStatus()
  const playObj = {
    index: playIndex,
    player: player,
    over: status
  }
  console.log('Status is: ' + status)
  return playObj
}

// Get player symbol
const getValue = () => {
  let countX = 0
  let countO = 0
  let turnValue = ''
  for (let i = 0; i < 9; i++) {
    if (arr[i] === 'X') {
      countX++
    } else if (arr[i] === 'O') {
      countO++
    }
  }
  if (countX > countO) {
    turnValue = 'O'
  } else if (countX < countO) {
    turnValue = 'X'
  } else {
    turnValue = 'X'
  }
  return turnValue
}

const validPos = (playIndex) => {
  console.log(arr[playIndex])
  let valid = false
  if (arr[playIndex] === 'X' || arr[playIndex] === 'O') {
    valid = false
  } else {
    valid = true
  }
  return valid
}

// Determine player message
const nextPlayer = function (player) {
  let nextPlayer
  if (player === 'X') {
    nextPlayer = 'O'
  } else if (player === 'O') {
    nextPlayer = 'X'
  }
  ui.playerTurn(nextPlayer)
}

const gameStatus = () => {
  let gameOver = false
  // Determine row wins
  if (numberOfPlays >= 4 && numberOfPlays < 9) {
    if ((arr[0] === arr[1] && arr[0] === arr[2] && arr[0] !== '') ||
  (arr[3] === arr[4] && arr[3] === arr[5] && arr[3] !== '') || (arr[6] === arr[7] && arr[6] === arr[8] && arr[6] !== '')) {
      gameOver = true
      // Determine column wins
    } else if ((arr[0] === arr[3] && arr[0] === arr[6] && arr[0] !== '') || (arr[1] === arr[4] && arr[1] === arr[7] && arr[1] !== '') || (arr[2] === arr[5] && arr[2] === arr[8] && arr[2] !== '')) {
      gameOver = true
      // Determine diagonal wins
    } else if ((arr[0] === arr[4] && arr[0] === arr[8] && arr[0] !== '') || (arr[2] === arr[4] && arr[2] === arr[6] && arr[2] !== '')) {
      gameOver = true
    }
  } else if (numberOfPlays === 9) {
    ui.onGameTie()
    gameOver = true
  } else {
    gameOver = false
  }
  return gameOver
}

// const gameResult = () => {
//
// }

module.exports = {
  gameBoard
}
