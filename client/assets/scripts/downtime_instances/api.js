'use strict'

const config = require('../config')
const store = require('../store')

const createDowntime = function (data) {
  console.log('Data in api createDowntime is ', data)
  return $.ajax({
    url: config.apiOrigin + '/downtime_instances',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getMyDowntime = function (data) {
  console.log('Data in api getMyDowntime is ', data)
  return $.ajax({
    url: config.apiOrigin + '/downtime_instances/' + data.downtime_instance.id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateDowntime = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/downtime_instances/' + data.downtime_instance.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteInstance = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/downtime_instances/' + data.downtime_instance.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createDowntime,
  getMyDowntime,
  updateDowntime,
  deleteInstance
}
