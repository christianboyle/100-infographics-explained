// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries

const array1 = ['a', 'b', 'c']

const iterator1 = array1.entries()

console.log(iterator1.next().value) // [ 0, 'a' ]

console.log(iterator1.next().value) // [ 1, 'b' ]

// iterating with index and element

const array2 = ['a', 'b', 'c']

for (const [index, element] of array2.entries()) {
  console.log(index, element)
}

/*
0 a
1 b
2 c
*/

// using a for...of loop

const array3 = ['a', 'b', 'c']

const arrayEntries = array3.entries()

for (let element of arrayEntries) {
  console.log(element)
}

/*
[ 0, 'a' ]
[ 1, 'b' ]
[ 2, 'c' ]
*/
