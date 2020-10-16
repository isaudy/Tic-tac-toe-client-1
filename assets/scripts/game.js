const store = require('./store')
const ui = require('./games/ui')

const arr = ['', '', '', '', '', '', '', '', '']

const gameBoard = function (index) {
  console.log(index.id)
  console.log('The game board')
  const playIndex = $('#' + index.id).data('cellIndex')
  const valid = validPos(playIndex)
  if (valid === true) {
    arr[playIndex] = getValue()
    ui.onBoxClickSuccess(playIndex, arr[playIndex])
  } else {
    console.log('This position is invalid')
    ui.onBoxClickFail(playIndex, arr[playIndex])
  }
  console.log(arr)
}

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

module.exports = {
  gameBoard
}
