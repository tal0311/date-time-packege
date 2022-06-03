'use strict'

// function start here
function getFormattedTime(type, sep) {
  var date = Date.now()
  switch (type) {
    case 'Array':
      return _getTimeAsArray(date)
    case 'HH:MM:SS':
      return _getTimeByHMS(type, sep)
    case 'HH:MM':
      return _getTimeByHMS(type, sep)
    case 'AM/PM':
      return _getLocalTime(type)
    case 'DD/MM/YYYY':
      return _getTimeByDMY(type, sep)
    case 'MM/DD/YYYY':
      return _getLocalTime(type, sep)
    default:
      break
  }
}
// Private function start here
function _getTimeAsArray(date) {
  console.log(date)
  date = new Date(date)
  date = date.toString()
  date = date.split(' ')
  date = date.splice(0, 5)
  return date
}

function _getTimeByHMS(type, sep = ':') {
  var time = new Date()
  const hours =
    time.getHours() > 9
      ? time.getHours().toString()
      : time.getHours().toString().padStart(2, '0')
  const minutes =
    time.getMinutes() > 9
      ? time.getMinutes().toString()
      : time.getMinutes().toString().padStart(2, '0')
  const secondes =
    time.getSeconds() > 9
      ? time.getSeconds().toString()
      : time.getSeconds().toString().padStart(2, '0')

  if (type === 'HH:MM:SS') {
    return `${hours}${sep}${minutes}${sep}${secondes}`
  }
  if (type === 'HH:MM') {
    return `${hours}${sep}${minutes}`
  }
}

function _getLocalTime(type, sep = '/') {
  var time = new Date()
  if (type === 'AM/PM') {
    return time.toLocaleTimeString()
  }
  if (type === 'MM/DD/YYYY') {
    console.log('ok')
    return time.toLocaleDateString().replaceAll('/', sep)
  }
}

function _getTimeByDMY(type, sep = '/') {
  var time = new Date()
  return `${time.getDate()}${sep}${
    time.getMonth() + 1
  }${sep}${time.getFullYear()}`
}

module.exports = getFormattedTime
