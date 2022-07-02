// https://medium.com/swlh/how-to-flatten-an-array-in-javascript-6b3fef075655

const arr = [1, 2, [3, 4, [5, 6]]]

// to enable deep level flatten use recursion with reduce and concat

function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice()
}
flatDeep(arr, Infinity) // [1, 2, 3, 4, 5, 6]
