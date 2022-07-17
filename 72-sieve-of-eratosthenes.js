const findPrimeNumbersUpTo = (maxNumber) => {
  const isPrime = new Array(maxNumber + 1).fill(true)
  isPrime[0] = false
  isPrime[1] = false

  const primes = []

  for (let number = 2; number <= maxNumber; number++) {
    if (isPrime[number] === false) {
      continue
    }

    primes.push(number)

    let nextNumber = number ** 2

    while (nextNumber <= maxNumber) {
      isPrime[nextNumber] = false
      nextNumber += number
    }
  }

  return primes
}

console.log(findPrimeNumbersUpTo(15)) // [ 2, 3, 5, 7, 11, 13 ]
