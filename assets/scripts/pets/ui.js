/*
PETS UI: assets/scripts/pets/ui.js
Creates success and failure handler functions
Modifies index.html
*/
'use strict'

const onIndexSuccess = function (res) {
  const pets = res.pets
  let petsHtml = ''
  pets.forEach(pet => {
    petsHtml = (`
      <div id=${pet._id} class="pet-info">
        <h3>${pet.name} the ${pet.type}</h3>
        <h4>Happiness: ${pet.happiness}/100</h4>
        <p>ID: ${pet._id}</p>
        <input value="Release ${pet.name}" type="submit" class="pets-release" data-id=${pet._id}>
        <input value="Play With ${pet.name}" type="submit" class="pets-play"
      </div>
      ` + petsHtml)
  })
  $('#pets-display').html(petsHtml)
}

const onShowSuccess = function (res) {
  const pet = res.pet
  const petHtml = `
    <div id=${pet._id}>
      <h3>${pet.name} the ${pet.type}</h3>
      <h4>Happiness: ${pet.happiness}/100</h4>
      <p>ID: ${pet._id}</p>
      <input value="Release Pet" type="button" class="pets-release" data-id=${pet._id}>
    </div>
    `
  $('#pets-display').html(petHtml)
  $('form').trigger('reset')
}

const onCreateSuccess = function (res) {
  const pet = res.pet
  const petHtml = `
    <div id=${pet._id}>
      <h3>${pet.name} the ${pet.type}</h3>
      <h4>Happiness: ${pet.happiness}/100</h4>
      <p>ID: ${pet._id}</p>
      <input value="Release Pet" type="button" class='pets-release' data-id=${pet._id}>
    </div>
    `
  $('#pets-display').prepend(petHtml) // add to list
  $('form').trigger('reset')
}

const onReleaseSuccess = function () {
  $('#info-message').text('Released!').fade(4000)
}
const onUpdateSuccess = function () {
  $('form').trigger('reset')
}

const onError = function (error) {
  // log any errors that occur
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
