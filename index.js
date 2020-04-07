const animal = "dog"

function myAnimal() {
  return animal // finds the animal in global scope as it is not able to find in global scope
}

function yourAnimal() {
  let animal = "cat"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  // Feel free to move things around!
  const two = 2;
  return n + two
}
