const array = [{ prop: 1 }, { prop: 2 }]

const containsObject = array.some((element) => element.prop === 1)

console.log(containsObject) // true
