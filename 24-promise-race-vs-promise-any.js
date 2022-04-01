// https://dmitripavlutin.com/promise-any/

var promiseAnyPolyfill = require('promise-any-polyfill')

async function run() {
  const promise = Promise.race([
    rejectTimeout(new Error('Out of vegetables!'), 1000),
    rejectTimeout(new Error('Out of fruits!'), 2000),
    resolveTimeout(['oranges', 'apples'], 3000)
  ])

  // wait...
  try {
    const list = await promise
    // after 2 seconds
    console.log(list)
    // logs ['oranges', 'apples'] when using Promise.any
  } catch (error) {
    console.log(error)
    // logs Error: Out of vegetables! when using Promise.race
  }
}

run()

function resolveTimeout(value, delay) {
  return new Promise((resolve) => setTimeout(() => resolve(value), delay))
}

function rejectTimeout(reason, delay) {
  return new Promise((r, reject) => setTimeout(() => reject(reason), delay))
}
