const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('You have successfully signed up as: ' + response.user.email)
  $('form').trigger('reset')
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
  $('#get-prev-game').show()
  $('form').trigger('reset')
}

const onSignInFailure = function () {
  $('#message').text('Incorrect username or password try again')
}

const onChangePassSuccess = function (response) {
  $('#message').text('You have successfully changed your password')
  $('form').trigger('reset')
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
  $('#board').hide()
  $('#game_notifications').hide()
  $('#get-prev-game').hide()
}

const onSignOutFailure = function () {
  $('#message').text('Failed to sign out')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePassSuccess,
  onChangePassFail,
  onSignOutSuccess,
  onSignOutFailure
}
