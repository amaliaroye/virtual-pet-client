/*
PETS UI: assets/scripts/pets/ui.js
Modifies index.html
*/
'use strict'

// const statusMessage = require('./messages')

/*
 * -------- [ P E T   I N F O ] --------
 */
const petInfoHtml = function (pet) {
  let mood = 'neutral'
  if (pet.happiness < 20) {
    mood = 'sad'
  } else if (pet.happiness < 40) {
    mood = 'tense'
  } else if (pet.happiness < 60) {
    mood = 'neutral'
  } else if (pet.happiness < 80) {
    mood = 'content'
  } else {
    mood = 'happy'
  }

  // statusMessage(mood)
  return (`
    <div class="pet-info" id=${pet._id} data-id="${pet._id}">
      <div class="pet-sprite">
        <img class="spritesheet idle-${mood}" src="./public/images/${pet.type}-idle.png" alt="${pet.name}-sprite">
      </div>
      <h3>${pet.name} the ${pet.type}</h3>
      
      <div class="mood-display ${mood}" data-id="${pet._id}">
        <div class="mood-icon ${mood}" data-id="${pet._id}">${mood}</div>
        <p class="statusMessage ${mood}" data-id="${pet._id}"></p>
      </div>
      
      <div class="statbar happiness">
        <div class="statbar-fill happiness" style="width:${pet.happiness}%"> Happiness: ${pet.happiness}%
        </div>
        </div>

    <div class="pet-options">
      <input value="Play With ${pet.name}" type="button" class="pets-play pet-options" data-id="${pet._id}" data-happiness="${pet.happiness}">
      
      <details data-id="${pet._id}">
        <summary>Options</summary>
        <form class="pets-update">
          Name:<input value="${pet.name}" type="text" class="pets-update pet-options" data-id="${pet._id}">
          <input value="Change ${pet.name}'s name?" type="submit" class="pets-update pet-options" data-id="${pet._id}">
        </form>
          <input value="Release ${pet.name}?" type="button" class="pets-release pet-options" data-id="${pet._id}" data-name="${pet.name}">
          Type: ${pet.type}
          Owner: <span class="barcode">${pet.owner}</span>
          Id: <span class="barcode">${pet._id}</span>
      </details>
    </div>
  </div>
  `)
}

/*
 * -------------------------------------------------- [ I N D E X ] --------
 * GET : /pets
 */
const onIndexSuccess = function (res) {
  const pets = res.pets
  $('#pets-display').empty()
  // iterate through res.pets array, apply petInfoHtml on each and insert into pets-display container
  pets.forEach((pet) => {
    $('#pets-display').prepend(petInfoHtml(pet))
  })
}

/*
 * ---------------------------------------------------- [ S H O W ] --------
 * GET : /pets/:id
 */
const onShowSuccess = function (res) {
  const pet = res.pet
  $('#pets-display').html(petInfoHtml(pet))
  $('form').trigger('reset')
}

/*
 * ------------------------------------------------ [ C R E A T E ] --------
 * POST : /pets
 */
const onCreateSuccess = function (res) {
  const pet = res.pet
  // display new pet at the top of the list of pets
  $('#pets-display').slideDown().prepend(petInfoHtml(pet))
  $('form').trigger('reset')
}

/*
 * ------------------------------------------------ [ D E L E T E ] --------
 * DELETE : /pets/:id
 */
const onReleaseSuccess = function (name) {
  $('#message').text(`Bye bye ${name}! Have fun at the farm!`)
}

/*
 * ------------------------------------------------ [ U P D A T E ] --------
 * PATCH : /pets/:id
 */
const onUpdateSuccess = function (res) {
  const pet = res.pet
  // refresh pet display
  $(`#${pet._id}`).html(petInfoHtml(pet))
  $('#message').text(`Name changed to ${pet.name}!`)
}

/*
 * -------------------------------------------------- [ E R R O R ] --------
 */
const onError = function () {
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
