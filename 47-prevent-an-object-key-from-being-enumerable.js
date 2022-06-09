// https://dmitripavlutin.com/object-rest-spread-properties-javascript/

const a = 1
const b = undefined
const c = 2

const obj = {
  a,
  ...(b ? { b } : {}),
  ...(c ? { c } : {})
}

obj.hasOwnProperty('b') // false
obj.hasOwnProperty('c') // true
