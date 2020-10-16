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

const updateGame = function (cell, player, over) {
  return $.ajax({
    url: config.apiUrl + '/games/:id' + store.game,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: cell,
          value: player
        },
        over: over
      }
    }
  })
}

module.exports = {
  createGame,
  getGames,
  updateGame
}
