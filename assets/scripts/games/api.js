const config = require('./../config')
const store = require('./../store')

// Create Game

const createGame = function (data) {
  data = {}
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}

const getGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET'
  })
}

module.exports = {
  createGame,
  getGames
}
