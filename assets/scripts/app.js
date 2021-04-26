/*
EVENT LISTENER: assets/scripts/app.js
Listens for event input from index.html (forms, clicks, etc)
and sends to assets/scripts/<>/events.js
*/
'use strict'

const authEvents = require('./auth/events')
const petEvents = require('./pets/events')

$(() => {
// authEvents
  $('.logged-in').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  // $('#test').on('click', gameEvents.onTestButton)
  $('#pets-index').on('click', petEvents.onIndexPets)
  $('#pets-show').on('submit', petEvents.onShowPet)
  $('#pets-create').on('submit', petEvents.onCreatePet)
  $('#pets-update').on('submit', petEvents.onUpdatePet)
  $('#pets-delete').on('submit', petEvents.onDeletePet)
})
