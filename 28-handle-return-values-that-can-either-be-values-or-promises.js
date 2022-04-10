const isThennable = (obj) => {
  typeof obj === 'obj' && 'then' in obj && obj.then === 'function'
  console.log('is thennable, promise')
}

const isNotThennable = (x) => {
  // return console.log('not thennable, normal function')
  console.log('not thennable, normal function')
  return x * x
}

const myPromise = new Promise((resolve, reject) => {
  let a = false
  return a ? resolve('a is found!') : reject('sorry, no a')
})

myPromise
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })

let startThennable = async function (result, err) {
  if (isThennable(result)) {
    result = await result
  }
}

console.log(startThennable())
// is thennable, promise
// Promise { undefined }
// sorry, no a

console.log(isNotThennable(5))
// not thennable, normal function
// undefined
