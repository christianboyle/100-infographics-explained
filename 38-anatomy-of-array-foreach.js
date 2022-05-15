// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const items = ['item1', 'item2', 'item3']
const copyItems = []

items.forEach((item) => {
  copyItems.push(item)
})

console.log(copyItems) // [ 'item1', 'item2', 'item3' ]
