const array = [{ prop: 1 }, { prop: 2 }]

const indexOfObject = array.indexOf({ prop: 1 })

console.log(indexOfObject) // -1

const arrayNew = [{ prop: 1 }, { prop: 2 }]

const indexOfObjectNew = array.findIndex((element) => element.prop === 1)

console.log(indexOfObjectNew) // 0
