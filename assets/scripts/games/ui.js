// const store = require('./../store')
// Create part

const onCreateSuccess = function (response) {
  $('#message').text('Game created successfully')
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
}

module.exports = {
  onCreateSuccess,
  onCreateFail,
  onGetGamesSuccess,
  onGetGamesFail,
  onBoxClickSuccess
}
