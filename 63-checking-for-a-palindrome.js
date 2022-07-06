const isPalindrome = (str) => {
  const regex = /[\W_]/g
  const cleaned = str.toLowerCase().replace(regex, '')
  const len = cleaned.length

  for (let i = 0; i < len / 2; i++) {
    if (cleaned[i] !== cleaned[len - 1 - i]) {
      return false
    }
  }

  return true
}

console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('race. ____car')) // true
