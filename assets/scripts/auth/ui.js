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
