/*
PETS UI: assets/scripts/pets/ui.js
Creates success and failure handler functions
Modifies index.html
*/
'use strict'

const petInfoHtml = function (pet) {
  return `<div id="${pet._id}">
    <h3>${pet.name}</h3> <h4>the ${pet.type}</h4>

    <h4>Happiness: ${pet.happiness}/100</h4>
    <div class="statbar">
      <div class="stat" style="width:${pet.happiness}%">${pet.happiness}</div>
    </div>

    <input value="Release ${pet.name}" type="button" class="pets-release pet-options" data-id=${pet._id}>
    <input value="Play With ${pet.name}" type="button" class="pets-play pet-options" data-id=${pet._id}>

  </div>`
}
// <form class="pets-update">
//   <input name="pet[key]" type="text" placeholder="Property to change" required>
//   <input name="pet[value]" type="text" placeholder="New value" required>
//   <input value="Update Pet!" type=submit>
// </form>

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
  $('#pets-display').slideDown(1000).prepend(petInfoHtml(pet)) // add to #pets-display
  $('form').trigger('reset') // clear form
}

const onReleaseSuccess = function () {
  $('#message').text('Released!').toggle(1000)
}

const onUpdateSuccess = function () {
  $('#message').text('Updated!').toggle(1000)
  $('form').trigger('reset')
}

const onError = function () {
  $('#error-message').text('Something went wrong, please try again.').toggle(1000)
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
