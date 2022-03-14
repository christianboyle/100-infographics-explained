const someFunction = (a, optionalB, c) => {
  return [a, optionalB, c]
}

const [a, optionalB, c] = someFunction()

console.log(someFunction(1, undefined, '2')) // [ 1, undefined, '2' ]

const someFunctionSpread = (d, optionalE, f) => {
  return [d, optionalE, f]
}

const [d, optionalE, f] = someFunctionSpread()

console.log(someFunctionSpread(...[1, , '2'])) // [ 1, undefined, '2' ]
