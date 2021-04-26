/*
AUTHORIZATION UI: assets/scripts/auth/ui.js
Creates success and failure handler functions
Modifies index.html
*/
const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text('Created new account successfully! Please sign-in!')
  $('form').trigger('reset')
}

const onSignUpError = function () {
  $('#message').text('Whoops! Something went wrong. Please try again.')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Signed in successfully. Welcome!')
  $('form').trigger('reset')
  $('.logged-in').show()
  $('.logged-out').hide()
}
const onSignInError = function () {
  $('#message').text('Whoops! Something went wrong. Sign in failed. Please try again.')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Changed password successfully!')
  $('form').trigger('reset')
}
const onChangePasswordError = function () {
  $('#message').text('Whoops! Something went wrong. Your password was not changed.')
  $('form').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out!')
  $('.logged-out').hide()
  $('.logged-in').show()
}

const onSignOutError = function () {
  $('#message').text('Sign out failed. Please try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignUpError,
  onSignInSuccess,
  onSignInError,
  onChangePasswordSuccess,
  onChangePasswordError,
  onSignOutSuccess,
  onSignOutError
}
