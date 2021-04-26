/*
PETS UI: assets/scripts/pets/ui.js
Creates success and failure handler functions
Modifies index.html
*/
'use strict'
const onIndexSuccess = function (responseData) {
  const pets = responseData.pets
  console.log(responseData)
  let petsHTML = ''
  pets.forEach(pet => {
    petsHTML += `
      <h4>Name: ${pet.name}</h4>
      <p>Happiness: ${pet.happiness}</p>
      <p>Type: ${pet.type}</p>
      <p>Owner: ${pet.owner}</p>
      <p>ID: ${pet._id}</p>
    `
  })
  $('#pets-display').html(petsHTML)
  $('form').trigger('reset')
}
const onCreateSuccess = function () {
  console.log('Pet successfully created!')
  $('form').trigger('reset')
}

const onError = function (error) {
  // log any errors that occur
  console.error(error)
  $('#error-message').text('Something went wrong, please try again.')
  $('#error-message').addClass('failure')
  setTimeout(() => {
  // clear error message
    $('#error-message').text('')
    // Remove the class `success` from the element with the id `error-message`
    $('#error-message').removeClass('failure')
  }, 5000)

  $('form').trigger('reset')
}
module.exports = {
  onIndexSuccess,
  onCreateSuccess,
  onError
}
