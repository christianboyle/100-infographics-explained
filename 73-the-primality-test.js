const isPrime = (number) => {
  if (!Number.isInteger(number)) {
    return false
  }

  if (number <= 1) {
    return false
  }

  if (number <= 3) {
    return false
  }

  if (number % 2 === 0) {
    return false
  }

  const limit = Math.sqrt(number)

  for (let divisor = 3; divisor <= limit; divisor += 2) {
    if (number % divisor === 0) {
      return false
    }
  }

  return true
}

console.log(isPrime(20)) // false

console.log(isPrime(23)) // true
