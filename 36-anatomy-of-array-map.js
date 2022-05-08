// thttps://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know

const firstArray = [2, 3, 4, 5, 35]

const newFirstArray = firstArray.map((firstItem) => {
  return firstItem * 2
})

console.log(newFirstArray) // [ 4, 6, 8, 10, 70 ]

// cleaner approach

const secondArray = [2, 3, 4, 5, 35]

const makeSecondArray = (secondItem) => secondItem * 2

const newSecondArray = secondArray.map(makeSecondArray)

console.log(newSecondArray) // [ 4, 6, 8, 10, 70 ]

// reformatting array objects

const myUsers = [
  { name: 'shark', likes: 'ocean' },
  { name: 'turtle', likes: 'pond' },
  { name: 'otter', likes: 'fish buckets' }
]

const usersByLikes = myUsers.map((item) => {
  const container = {}

  container[item.name] = item.likes
  container.age = item.name.length * 10

  return container
})

console.log(usersByLikes)

/*
[ { shark: 'ocean', age: 50 },
  { turtle: 'pond', age: 60 },
  { otter: 'fish buckets', age: 50 } ]
*/
