const hammingDistance = (stringOne, stringTwo) => {
  if (stringOne == null || stringTwo == null) {
    throw new Error('You must provide two valid strings')
  }

  if (stringOne.length != stringTwo.length) {
    throw new Error('Both strings must be of equal length')
  }

  let hammingDistance = 0

  for (let i = 0; i < stringOne.length; i++) {
    if (stringOne[i] !== stringTwo[i]) {
      hammingDistance++
    }
  }

  return hammingDistance
}

console.log(hammingDistance('test', 'sett')) // 2
console.log(hammingDistance('test', 'test')) // 0
console.log(hammingDistance('test', 'test1')) // Error: Both strings must be of equal length
