// https://www.freecodecamp.org/news/javascript-immutability-frozen-objects-with-examples/

'use strict'

const array = [1, 2, 3]

Object.freeze(array)

// array[1] = 2 // Cannot assign to read only property '1' of object '[object Array]'

// array.length = 0 // Cannot assign to read only property 'length' of object '[object Array]'

// array.push(4) // Cannot add property 3, object is not extensible
