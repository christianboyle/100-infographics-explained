const obj = {
  nested: undefined
}

const { one, two } = obj?.nested ?? {}

console.log(one, two) // undefined undefined
