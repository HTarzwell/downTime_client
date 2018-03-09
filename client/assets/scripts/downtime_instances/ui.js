'use strict'

// const store = require('../store')

const createDowntimeSuccess = function (data) {
  $('#create-message').text('Created New Downtime!')
  $('#create-message').css('background-color', 'green')
  console.log('Create downtime ui data is ', data)
}

const createDowntimeFailure = function (error) {
  $('#create-message').text('Error On New Downtime')
  $('#create-message').css('background-color', 'red')
  console.log(error)
}

const getAllDowntimeSuccess = function (data) {
  $('#getall-message').text('Your downtime instances are ', data)
  $('#getall-message').css('background-color', 'green')
}

const getAllDowntimeFailure = function (error) {
  $('#getall-message').text('Error On Sign-In')
  $('#getall-message').css('background-color', 'red')
  console.log(error)
}

module.exports = {
  createDowntimeSuccess,
  createDowntimeFailure,
  getAllDowntimeSuccess,
  getAllDowntimeFailure
}
