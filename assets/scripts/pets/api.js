/*
PETS API: assets/scripts/pets/api.js
Contains functions that use $.ajax to make an API call
Invoked by event handler callback assets/scripts/pets/events.js
*/
// import our apiUrl from the config file
const config = require('./../config')
const store = require('./../store')

/*      ___   _  _   ___    ___  __  __
 *     |_ _| | \| | |   \  | __| \ \/ /
 *      | |  | .` | | |) | | _|   >  <
 *     |___| |_|\_| |___/  |___| /_/\_\
 */
// GET: /pets (owned by current user)
const index = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/pets',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

/*      ___   _  _    ___   __      __
 *     / __| | || |  / _ \  \ \    / /
 *     \__ \ | __ | | (_) |  \ \/\/ /
 *     |___/ |_||_|  \___/    \_/\_/
 */
// GET: /pets/:id (search for a pet by id)
const show = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/pets/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

/*       ___   ___   ___     _     _____   ___
 *      / __| | _ \ | __|   /_\   |_   _| | __|
 *     | (__  |   / | _|   / _ \    | |   | _|
 *      \___| |_|_\ |___| /_/ \_\   |_|   |___|
 */
// POST: /pets
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
/*      _   _   ___   ___      _     _____   ___
*     | | | | | _ \ |   \    /_\   |_   _| | __|
*     | |_| | |  _/ | |) |  / _ \    | |   | _|
*      \___/  |_|   |___/  /_/ \_\   |_|   |___|
*/
// PATCH: /pets/:id
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

/*      ___    ___   _      ___   _____   ___
 *     |   \  | __| | |    | __| |_   _| | __|
 *     | |) | | _|  | |__  | _|    | |   | _|
 *     |___/  |___| |____| |___|   |_|   |___|
 */
// DELETE: /pets/:id
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
