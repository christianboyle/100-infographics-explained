const fibonacci = (n, memo = {}) => {
  if (memo[n]) {
    return memo[n]
  }

  if (n <= 1) {
    return 1
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)

  return memo[n]
}

console.log(fibonacci(7)) // 21
