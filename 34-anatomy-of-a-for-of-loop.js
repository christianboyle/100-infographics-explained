const array = ['a', 'b', 'c', 'd']

const iterator = array[Symbol.iterator]()

console.log(iterator.next().value) // a
console.log(iterator.next().value) // b
console.log(iterator.next().value) // c
console.log(iterator.next().value) // d

for (item of array) {
  console.log(item)
}

/*
a
b
c
d
*/
