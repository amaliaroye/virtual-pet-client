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
  // get the value of the button's data-id attribute
  const id = $(event.target).data('id')
  // remove the <div> with the same id of pet._id
  $(this).parent().remove()
  api.release(id)
    .then(ui.onReleaseSuccess)
    .catch(ui.onError)
}

const onPlay = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const petData = {
    pet: {
      happiness: (this.happiness + randomNumber)
    }
  }
  // patch pet.happiness with +randomNumber
  api.update(id, petData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}

const randomNumber = function () {
  return Math.floor((Math.random() * 5) + 1)
}

module.exports = {
  onIndexPets,
  onShowPet,
  onCreatePet,
  onUpdatePet,
  onReleasePet,
  onPlay
}
