const factorialIterative = (n) => {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}

console.log(factorialIterative(4)) // 24

const factorialRecursive = (n) => {
  return n > 1 ? n * factorialRecursive(n - 1) : 1
}

console.log(factorialRecursive(4)) // 24
