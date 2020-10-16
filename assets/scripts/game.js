const store = require('./store')
const ui = require('./games/ui')

const arr = ['', '', '', '', '', '', '', '', '']

const gameBoard = function (index) {
  console.log(index.id)
  console.log('The game board')
  const playIndex = $('#' + index.id).data('cellIndex')
  const symbol = getValue()
  arr[playIndex] = symbol
  console.log(arr)
  ui.onBoxClickSuccess(playIndex, symbol)
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

module.exports = {
  gameBoard
}
