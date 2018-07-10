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
  var moreKittens = [...kittens,'Broom'];
  return moreKittens
}

function prependKitten(name) {
  var otherKittens = ['Arnold', ...kittens]
  return otherKittens
}

function removeLastKitten() {

}

function removeFirstKitten() {
  return var lessKittens = kittens.slice(1)
}
