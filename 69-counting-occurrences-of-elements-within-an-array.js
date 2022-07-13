const countOccurrences = (array) =>
  array.reduce((accumulator, currentElement) => {
    accumulator[currentElement] = ++accumulator[currentElement] || 1
    return accumulator
  }, {})

console.log(countOccurrences([1, 2, 3, 3, 3, 4, 4])) // { 1: 1, 2: 1, 3: 3, 4: 2 }
