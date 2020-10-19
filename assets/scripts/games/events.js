const api = require('./api')
const ui = require('./ui')
const game = require('./../game')

// Create part

const onCreateGame = function (event) {
  event.preventDefault()

  api.createGame()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFail)
}

const onGetGames = function (event) {
  event.preventDefault()

  api.getGames()
    .then(ui.onGetGamesSuccess)
    // .catch(ui.onGetGamesFail)
    // Cannot reject
}

const onBoxClick = function (event) {
  event.preventDefault()

  const box = event.target
  const test = game.gameBoard(box)
  if (test === true) {
    ui.onGameEnd()
  } else if (test === false) {
    ui.onBoxClickFail()
  } else {
    api.updateGame(test)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFail)
  }
}

module.exports = {
  onCreateGame,
  onGetGames,
  onBoxClick
}
