/*
AUTHORIZATION UI: assets/scripts/auth/ui.js
Creates success and failure handler functions
Modifies index.html
*/
const store = require('./../store')

const onSignUpSuccess = function () {
  $('#alert-message').html('Created new account! Please sign-in!')
  $('form').trigger('reset')
}

const onSignUpError = function () {
  $('#alert-message').html('Whoops! Something went wrong. Please try again.')
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#alert-message').html('Welcome!')
  $('form').trigger('reset')
  $('.logged-in').show()
  $('.logged-out').hide()
}
const onSignInError = function () {
  $('#alert-message').html('Whoops! Sign in failed. Please try again.')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#alert-message').html('Changed password successfully!')
  $('form').trigger('reset')
}
const onChangePasswordError = function () {
  $('#alert-message').html('Whoops! Something went wrong. Your password was not changed.')
  $('form').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#alert-message').html('Signed out! Come back soon!')
  $('.logged-out').show()
  $('.logged-in').hide()
  $('#pets-display').empty()
}

const onSignOutError = function () {
  $('#alert-message').html('Sign out failed. Please try again.')
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
