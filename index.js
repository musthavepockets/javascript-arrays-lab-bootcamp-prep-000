// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  moreKittens = kittens.splice(3, 0, 'Broom')
  return moreKittens
}
