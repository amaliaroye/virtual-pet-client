/*
PETS UI: assets/scripts/pets/ui.js
Creates success and failure handler functions
Modifies index.html
*/
'use strict'

const petInfoHtml = function (pet) {
  return `<div id=${pet._id} class="pet-info">
    <h3>${pet.name} the ${pet.type}</h3>
    <h4>Happiness: ${pet.happiness}/100</h4>
    <input value="Release ${pet.name}" type=submit class="pets-release" data-id=${pet._id}>
    <input value="Play With ${pet.name}" type=submit class="pets-play" data-id=${pet._id}>
  </div>`
}

const onIndexSuccess = function (res) {
  const pets = res.pets
  let petsHtml = ''
  pets.forEach(pet => {
    petsHtml = (petInfoHtml(pet) + petsHtml)
  })
  $('#pets-display').html(petsHtml)
}

const onShowSuccess = function (res) {
  const pet = res.pet
  $('#pets-display').html(petInfoHtml(pet))
  $('form').trigger('reset')
}

const onCreateSuccess = function (res) {
  const pet = res.pet
  $('#pets-display').prepend(petInfoHtml(pet)) // add to #pets-display
  $('form').trigger('reset') // clear form
}

const onReleaseSuccess = function () {
  $('#info-message').text('Released!')
}

const onUpdateSuccess = function () {
  $('#info-message').text('Updated!')
  $('form').trigger('reset')
}

const onError = function (error) {
  console.error(error)
  $('#error-message').text('Something went wrong, please try again.')
  $('form').trigger('reset')
}

module.exports = {
  onIndexSuccess,
  onCreateSuccess,
  onShowSuccess,
  onReleaseSuccess,
  onUpdateSuccess,
  onError
}
