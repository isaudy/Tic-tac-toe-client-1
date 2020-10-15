const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('You have successfully signed up as: ' + response.user.email)
}

const onSignUpFailure = function () {
  $('#message').text('This email is already in use')
}

const onSignInSuccess = function (response) {
  $('#message').text('You have successfully signed in as: ' + response.user.email)
  store.user = response.user
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#create-game').show()
  $('#get-all-games').show()
}

const onSignInFailure = function () {
  $('#message').text('Incorrect username or password try again')
}

const onChangePassSuccess = function (response) {
  $('#message').text('You have successfully changed your password')
}

const onChangePassFail = function () {
  $('#message').text('Password changed failed')
}

const onSignOutSuccess = function () {
  $('#message').text('Successfully signed out')
  store.user = null
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#games-display').html('')
  $('#create-game').hide()
  $('#get-all-games').hide()
}

const onSignOutFailure = function () {
  $('#message').text('Failed to sign out')
}

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

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePassSuccess,
  onChangePassFail,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateSuccess,
  onCreateFail,
  onGetGamesSuccess,
  onGetGamesFail
}
