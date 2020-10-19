const store = require('./store')
const ui = require('./games/ui')

let arr = []
let numberOfPlays = 0
let status = false
let winner

const gameBoard = function (index) {
  console.log('arr in storage is: ' + store.game.cells)
  arr = store.game.cells
  let player
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
  // let gameOver = false
  // Determine row wins
  if (numberOfPlays >= 4 && numberOfPlays < 9) {
    if (gameIndices(0, 1, 2) || gameIndices(3, 4, 5) || gameIndices(6, 7, 8)) {
      return true
    } else if (gameIndices(0, 3, 6) || gameIndices(1, 4, 7) || gameIndices(2, 5, 8)) {
      return true
    } else if (gameIndices(0, 4, 8) || gameIndices(2, 4, 6)) {
      return true
    } else {
      return false
    }
  } else if (numberOfPlays === 9) {
    ui.onGameTie()
    return true
  } else {
    return false
  }
}

const gameIndices = (index1, index2, index3) => {
  if (arr[index1] === arr[index2] && arr[index1] === arr[index3] && arr[index1] !== '') {
    winner = arr[index1]
    ui.gameResult(winner)
    console.log('The winner is:' + winner)
    return true
  } else {
    return false
  }
}

// const gameResult = () => {
//
// }

module.exports = {
  gameBoard
}
