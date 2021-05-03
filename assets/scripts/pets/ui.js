/*
PETS UI: assets/scripts/pets/ui.js
Modifies index.html
*/
'use strict'

/*
 * -------- [ P E T   I N F O ] --------
 */
const petInfoHtml = function (pet) {
  return `<div class="pet-info" id=${pet._id} data-id="${pet._id}">
    <h3>${pet.name}</h3> <h4>the ${pet.type}</h4>
    <div class="statbar happiness">
      <div class="statbar-fill happiness" style="width:${pet.happiness}%"> Happiness: ${pet.happiness}/100
      </div>
    </div>

    <input value="Release ${pet.name}" type="button" class="pets-release pet-options" data-id="${pet._id}">
    <input value="Play With ${pet.name}" type="button" class="pets-play pet-options" data-id="${pet._id}" data-happiness="${pet.happiness}">

    <details data-id="${pet._id}">
      <summary>Show Details</summary>
      <ul>
        <li>Name: ${pet.name}</li>
        <li>Type: ${pet.type}</li>
        <li>Id: ${pet._id}</li>
        <li>Owner: ${pet.owner}</li>
      </ul>
    </details>
  </div>`
}

/*
 * ------------------------------------------------------ [ I N D E X ] --------
 * GET : /pets
 */
const onIndexSuccess = function (res) {
  const pets = res.pets
  // iterate through pets array, apply petInfoHtml and insert into pets-display
  pets.forEach((pet) => {
    $('#pets-display').prepend(petInfoHtml(pet))
  })
}

/*
 * -------------------------------------------------------- [ S H O W ] --------
 * GET : /pets/:id
 */
const onShowSuccess = function (res) {
  const pet = res.pet
  $('#pets-display').html(petInfoHtml(pet))
  $('form').trigger('reset')
}

/*
 * ---------------------------------------------------- [ C R E A T E ] --------
 * POST : /pets
 */
const onCreateSuccess = function (res) {
  const pet = res.pet
  // display new pet
  $('#pets-display').slideDown().prepend(petInfoHtml(pet))
  $('form').trigger('reset')
}

/*
 * ---------------------------------------------------- [ D E L E T E ] --------
 * DELETE : /pets/:id
 */
const onReleaseSuccess = function () {
  $('#message').text('Released!').slideDown(500).slideUp(500)
}

/*
 * ---------------------------------------------------- [ U P D A T E ] --------
 * PATCH : /pets/:id
 */
const onUpdateSuccess = function (res) {
  const pet = res.pet
  // refresh pet display
  $(`#${pet._id}`).html(petInfoHtml(pet))
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
