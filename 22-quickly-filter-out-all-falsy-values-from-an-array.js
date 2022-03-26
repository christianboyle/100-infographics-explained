const array = [1, null, undefined, 0, 2, '', 4]

const result = array.filter(Boolean)

console.log(result) // [ 1, 2, 4 ]
