const reverseInteger = (int) => {
  let parsedInt = parseInt(int, 10)
  let digit = 0
  let reversedInt = 0
  while (parsedInt) {
    digit = parsedInt % 10
    reversedInt = reversedInt * 10 + digit
    parsedInt = (parsedInt / 10) | 0
  }
  return reversedInt
}

console.log(reverseInteger(12345)) // 54321
