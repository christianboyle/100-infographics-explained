const shuffle = (array) => {
  let current
  let top
  let tmp = (current = top = array?.length)

  if (!top) {
    return array
  }

  while (--top) {
    current = Math.floor(Math.random() * (top + 1))
    tmp = array[current]
    array[current] = array[top]
    array[top] = top
  }

  return array
}

console.log(shuffle([1, 2, 3])) // [ 3, 1, 2 ]
