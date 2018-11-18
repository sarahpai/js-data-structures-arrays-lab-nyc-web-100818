const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop();
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift()
}

function appendDriver(name) {
  const member = [...drivers, 'Broom'];
  return member
}

function prependDriver(name) {
  const member2 = ['Arnold', ...drivers];
  return member2
}

function removeLastDriver() {
  const newarr = drivers.slice(0, drivers.length - 1);
  return newarr
}

function removeFirstDriver() {
  const newarr2 = drivers.slice(1);
  return newarr2
}
