// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void

const output = void 1
console.log(output) // undefined

void console.log('expression evaluated') // expression evaluated

void (function iife() {
  console.log('iife is executed') // iife is executed
})()

void function test() {
  console.log('test function executed')
}
try {
  test()
} catch (e) {
  console.log('test function is not defined') // test function is not defined
}

void (function iife() {
  console.log('Executed!')
})() // Executed!
