animal = ""

function myAnimal() {
  let animal = "dog"
  return animal
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
  n = Math.floor(Math.random() * 1000);
  const two = 2;
  return n + two
}
