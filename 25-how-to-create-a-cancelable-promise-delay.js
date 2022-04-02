const delay = (delay, value) => {
  let timeout
  let _reject = null
  const promise = new Promise((resolve, reject) => {
    _reject = reject
    timeout = setTimeout(resolve, reject, value)
  })
  return {
    promise,
    cancel: () => {
      if (!timeout) {
        return
      }
      clearTimeout(timeout)
      timeout = null
      _reject()
      _reject = null
    }
  }
}

const delayed = delay(5000, 'something')

delayed.promise
  .then((value) => console.log(value))
  .catch(() => console.error('Promise rejected'))

delayed.cancel()

const notDelayed = () => {
  let promise = new Promise(function (resolve, reject) {
    resolve('done!')
  })

  // delayed.promise.then gives us the error, promise.then gives the result
  promise.then(
    (result) => console.log('Promise resolved'),
    (error) => console.log('Promise rejected again')
  )
}

notDelayed()
