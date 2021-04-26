/*
PETS API: assets/scripts/pets/api.js
Contains functions that use $.ajax to make an API call
Invoked by event handler callback assets/scripts/pets/events.js
*/
// import our apiUrl from the config file
const config = require('../config')
const store = require('./../store')

// make a request to get all pets (index)
const index = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/pets',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// make a request to get a single pet
const show = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/pets/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// make a request to create a new pet
const create = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/pets',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// make a request to destroy a single pet
const destroy = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/pets/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// make a request to update a single pet
const update = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/pets/' + id,
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  index,
  show,
  destroy,
  update,
  create
}
