const items = [
  {
    id: 1,
    name: 'ball'
  },
  {
    id: 2,
    name: 'axe'
  }
]

// update item 2

let input = 'laptop',
  id = 2

const map = (array, callback) =>
  array.reduce((accumulator, currentElement, index) => {
    accumulator.push(callback(currentElement, index, currentElement))

    return accumulator
  }, [])

const updated_item = map(items, (originalArray) =>
  originalArray.id === id ? { ...originalArray, name: input } : originalArray
)

console.log(updated_item)

/*
[
  {
    "id": 1,
    "name": "ball"
  },
  {
    "id": 2,
    "name": "laptop"
  }
]
*/
