const squareRoot = (number, tolerance = 0) => {
  if (number < 0) {
    throw new Error(`Number '${number}' is below 0. Invalid.`)
  }

  if (number === 0) {
    return 0
  }

  const delta = 1 / 10 ** tolerance

  let root = 1

  while (Math.abs(number - root ** 2) > delta) {
    root -= (root ** 2 - number) / (2 * root)
  }

  return Math.round(root * 10 ** tolerance) / 10 ** tolerance
}

console.log(squareRoot(9)) // 3
console.log(squareRoot(10)) // 3
console.log(squareRoot(12)) // 4
console.log(squareRoot(16)) // 4

console.log(Math.sqrt(9)) // 3
console.log(Math.sqrt(10)) // 3.1622776601683795
console.log(Math.sqrt(12)) // 3.4641016151377544
console.log(Math.sqrt(16)) // 4
