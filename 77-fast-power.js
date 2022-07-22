const pow = (number, power) => {
  if (power === 0) {
    return 1
  }

  if (power % 2 === 0) {
    const multiplier = pow(number, power / 2)
    return multiplier ** 2
  }

  const multiplier = pow(number, Math.floor(power / 2))
  return multiplier ** 2 * number
}

console.log(pow(4, 2)) // 16
