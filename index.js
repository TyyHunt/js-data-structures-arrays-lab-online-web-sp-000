// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver() {
  drivers.push('Ralph')
}

function destructivelyPrependDriver() {
  drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver() {
  let newDrivers = drivers.slice()
  newDrivers.push('Broom')
  return newDrivers
}

function prependDriver() {
  let newDrivers = drivers.slice()
  newDrivers.unshift('Arnold')
  return newDrivers
}

function removeLastDriver() {
  let newDrivers = drivers.slice()
  newDrivers.pop()
  return newDrivers
}