/*
PET EVENT HANDLER: assets/scripts/pets/events.js
register event handler functions
Listens for event input from assets/scripts/app.js
*/
'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// view all owned pets
const onIndexPets = function () {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}

// Search for pet by id
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

const onPlay = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const happiness = $(event.target).data('happiness')
  const petData = { pet: { happiness: happiness } }
  // sends current happiness data to api
  api.update(id, petData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}

const onUpdatePet = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const form = event.target
  const formData = getFormFields(form)
  api.update(id, formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}

const onReleasePet = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const name = $(event.target).data('name')
  // remove the <div> with the same id of pet._id
  $(`#${id}`).remove()
  api.release(id)
    .then(ui.onReleaseSuccess(name))
    .catch(ui.onError)
}

module.exports = {
  onIndexPets,
  onShowPet,
  onCreatePet,
  onUpdatePet,
  onReleasePet,
  onPlay
}
