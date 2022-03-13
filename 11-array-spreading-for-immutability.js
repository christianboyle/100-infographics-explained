// push method modifies state and mutates oldArray

const oldArray = [1, 2]

oldArray.push(3)

console.log(oldArray) // [ 1, 2, 3 ]

// keeps array immuatable

const array = [1, 2]

const newArray = [...array, 3]

console.log(newArray) // [ 1, 2, 3 ]
