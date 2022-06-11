// https://medium.com/khojchakra/understanding-short-circuit-evaluation-in-javascript-31b5770a41f7

const age = 25

function driveCar() {
  return 'Driving Car'
}

const result = age > 18 && driveCar()

console.log(result) // Driving Car
