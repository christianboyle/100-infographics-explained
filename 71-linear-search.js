// https://flaviocopes.com/linear-search-javascript/

const linearSearch = (list, item) => {
  for (const [i, element] of list.entries()) {
    if (element === item) {
      return i
    }
  }
}

console.log(linearSearch(['a', 'b', 'c', 'd'], 'd')) // 3
