// https://www.freecodecamp.org/news/javascript-immutability-frozen-objects-with-examples/

'use strict'

const obj = {
  prop: 1
}

const frozenObj = Object.freeze(obj)

console.log(obj === frozenObj) // true

// obj['anotherProp'] = 2 // Cannot add property anotherProp, object is not extensible

// obj['prop'] = 3 // Cannot assign to read only property 'prop' of object '#<Object>'

// console.log(delete obj.prop) // false,  Cannot delete property 'prop' of #<Object>
