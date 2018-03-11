'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onCreateDowntime = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createDowntime(data)
    .then(ui.createDowntimeSuccess)
    .then($('#create-downtime input[type="text"]').val(''))
    .catch(ui.createDowntimeFailure)
}

const onGetAllDowntime = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('data downtime instance in events onGetAllDowntime is ', data.downtime_instance)
  api.getMyDowntime(data)
    .then(ui.getAllDowntimeSuccess)
    .then($('#get-downtime input[type="text"]').val(''))
    .catch(ui.getAllDowntimeFailure)
}

const onUpdateDowntime = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updateDowntime(data)
    .then(ui.updateDowntimeSuccess)
    .then($('#update-downtime input[type="text"]').val(''))
    .catch(ui.updateDowntimeFailure)
}

const onDeleteDowntime = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.deleteInstance(data)
    .then(ui.deleteDowntimeSuccess)
    .then($('#delete-downtime input[type="text"]').val(''))
    .catch(ui.deleteDowntimeFailure)
}

const addHandlers = () => {
  $('#create-downtime').on('submit', onCreateDowntime)
  $('#get-downtime').on('submit', onGetAllDowntime)
  $('#update-downtime').on('submit', onUpdateDowntime)
  $('#delete-downtime').on('submit', onDeleteDowntime)
}

module.exports = {
  addHandlers
}
