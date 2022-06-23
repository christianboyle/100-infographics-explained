const isPowerOfTwo = (number) => {
  if (number < 1) {
    return false
  }

  return (number & (number - 1)) === 0
}

console.log(isPowerOfTwo(8)) // true

console.log(isPowerOfTwo(9)) // false
