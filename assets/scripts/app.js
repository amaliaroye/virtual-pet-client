/*
EVENT LISTENER: assets/scripts/app.js
Listens for event input from index.html (forms, clicks, etc)
and sends to assets/scripts/<>/events.js
*/
'use strict'

const authEvents = require('./auth/events')
const petEvents = require('./pets/events')

$(() => {
  $('.logged-in').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  $('#pets-index').on('submit', petEvents.onIndexPets)
  $('#pets-show').on('submit', petEvents.onShowPet)
  $('#pets-create').on('submit', petEvents.onCreatePet)
  $('#pets-display').on('click', '.pets-play', petEvents.onPlay)
  $('#pets-display').on('click', '.pets-release', petEvents.onReleasePet)
  $('#pets-display').on('submit', '.pets-update', petEvents.onUpdatePet)
})
