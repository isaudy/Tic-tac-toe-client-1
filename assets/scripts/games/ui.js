const store = require('./../store')
// Create part

const onCreateSuccess = function (response) {
  $('#message').text('Game created successfully')
  console.log(response)
  store.game = response.game
  console.log(response.game)
}

const onCreateFail = function () {
  $('#message').text('Failed to create game')
}

const onGetGamesSuccess = function (response) {
  console.log(response)
  const displayGames = function (element) {
    $('#games-display').append(`
    <h4>Game id: ${element._id} </h4>
    <p> Over: ${element.over} </p>
    <p> Cells: ${element.cells} </p>
    `)
  }
  response.games.forEach(element => displayGames(element))
}

const onGetGamesFail = function () {
  $('#message').text('Failed to get games')
}

// Track board in JS
const onBoxClickSuccess = function (playIndex, val) {
  $('#box' + playIndex).text(val)
  $('#notification').text('')
}

const onBoxClickFail = function () {
  $('#notification').text('This position is invalid')
}

const onUpdateSuccess = function (response) {
  // store.game = response.game
  console.log('updated game is:' + store.game.cells)
}

const onUpdateFail = function () {
  $('#update').text('Failed to update game')
}

const playerTurn = function (player) {
  $('#current_player').text('Current player: ' + player)
}

const onGameEnd = function () {
  $('#notification').text('The game is over')
}

const onGameTie = function () {
  $('#result').text('It\'s a tie!')
}

module.exports = {
  onCreateSuccess,
  onCreateFail,
  onGetGamesSuccess,
  onGetGamesFail,
  onBoxClickSuccess,
  onBoxClickFail,
  onUpdateSuccess,
  onUpdateFail,
  playerTurn,
  onGameEnd,
  onGameTie
}
