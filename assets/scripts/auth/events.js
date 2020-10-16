const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePass = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.changePass(data)
    .then(ui.onChangePassSuccess)
    .catch(ui.onChangePassFail)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// // Create part
//
// const onCreateGame = function (event) {
//   event.preventDefault()
//
//   api.createGame()
//     .then(ui.onCreateSuccess)
//     .catch(ui.onCreateFail)
// }
//
// const onGetGames = function (event) {
//   event.preventDefault()
//
//   api.getGames()
//     .then(ui.onGetGamesSuccess)
//     // .catch(ui.onGetGamesFail)
//     // Cannot reject
// }
//
// const onBoxClick = function (event) {
//   event.preventDefault()
//
//   const box = event.target
//   game.gameBoard(box)
// }

module.exports = {
  onSignUp,
  onSignIn,
  onChangePass,
  onSignOut
}
