/*
PET EVENT HANDLER: assets/scripts/pets/events.js
register event handler functions
Listens for event input from assets/scripts/app.js
*/
'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onIndexPets = function () {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}
const onShowPet = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.show(formData.pet.id)
    .then(ui.onShowSuccess)
    .catch(ui.onError)
}

const onCreatePet = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}

module.exports = {
  onIndexPets,
  onShowPet,
  onCreatePet
}
