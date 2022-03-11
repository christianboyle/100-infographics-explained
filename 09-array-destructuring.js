const array = [1, 2, 3, 4, 5]

const [firstValue, , thirdValue, ...rest] = array

console.log(firstValue, thirdValue, ...rest) // 1 3 4 5
