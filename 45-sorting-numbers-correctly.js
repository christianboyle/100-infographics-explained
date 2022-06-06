// https://www.javascripttutorial.net/javascript-array-sort/

const array = [5, 51, 2, 26, 6, 1, 20]

array.sort() // [ 1, 2, 20, 26, 5, 51, 6 ]

array.sort((a, b) => a - b) // [ 1, 2, 5, 6, 20, 26, 51 ]
