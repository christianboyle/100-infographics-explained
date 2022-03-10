const flatten = (...args) => args.flat(Infinity)

const result = flatten([1, 2, [3, 4], [[5], 6]])

console.log(result) // [ 1, 2, 3, 4, 5, 6 ]
