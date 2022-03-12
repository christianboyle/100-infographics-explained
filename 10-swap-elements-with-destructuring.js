const array = [1, 2, 3]

const swapped = ([array[0], array[1], array[2]] = [
  array[2],
  array[1],
  array[0]
])

console.log(swapped) // [ 3, 2, 1 ]
