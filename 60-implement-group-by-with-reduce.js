// https://www.wisdomgeek.com/development/web-development/javascript/how-to-groupby-using-reduce-in-javascript/

let posts = [
  {
    author: 'saransh',
    title: 'Learning context API and the useContext React hook'
  },
  {
    author: 'pranshu',
    title: 'Machine Learning Misconceptions That Software Developers Have'
  },
  {
    author: 'saransh',
    title: 'Understanding the useReducer hook in React'
  }
]

const groupBy = (input, key) => {
  return input.reduce((acc, currentValue) => {
    let groupKey = currentValue[key]
    if (!acc[groupKey]) {
      acc[groupKey] = []
    }
    acc[groupKey].push(currentValue)
    return acc
  }, {})
}

console.log(groupBy(posts, 'author'))
