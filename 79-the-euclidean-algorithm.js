const euclideanAlgorithm = (a, b) => {
  const absoluteA = Math.abs(a)
  const absoluteB = Math.abs(b)

  return absoluteB === 0
    ? absoluteA
    : euclideanAlgorithm(absoluteB, absoluteA % absoluteB)
}

console.log(euclideanAlgorithm(20, 40)) // 20
console.log(euclideanAlgorithm(100, 150)) // 50
console.log(euclideanAlgorithm(21, 77)) // 7
