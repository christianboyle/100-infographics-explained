// https://www.typescriptlang.org/docs/handbook/2/functions.html#constraints

function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
 
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]); // [ 1, 2, 3 ]

// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob"); // alice