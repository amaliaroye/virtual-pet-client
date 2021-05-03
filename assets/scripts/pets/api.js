/*
PETS API: assets/scripts/pets/api.js
Contains functions that use $.ajax to make an API call
Invoked by event handler callback assets/scripts/pets/events.js
*/
// import our apiUrl from the config file
const config = require('./../config')
const store = require('./../store')

/*
 * ------------------------------------------------------ [ I N D E X ] --------
 * GET : /pets
 */
const index = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/pets',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

/*
 * -------------------------------------------------------- [ S H O W ] --------
 * GET : /pets/:id
 */
const show = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/pets/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

/*
 * ---------------------------------------------------- [ C R E A T E ] --------
 * POST : /pets
 */
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

/*
 * ---------------------------------------------------- [ U P D A T E ] --------
 * PATCH : /pets/:id
 */
const update = function (id, petData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/pets/' + id,
    data: petData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

/*
 * ---------------------------------------------------- [ D E L E T E ] --------
 * DELETE : /pets/:id
 */
const release = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/pets/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  index,
  show,
  release,
  update,
  create
}
