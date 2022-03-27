const array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 4]

const uniqueValues = [...new Set(array)]

console.log(uniqueValues) // [ 1, 2, 3, 4, 5, 6 ]
