// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

;({ a, b } = { a: 10, b: 20 })
console.log(a)
console.log(b)
;({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 })
console.log(a) // 10
console.log(b) // 20
console.log(rest) // {c: 30, d: 40}
