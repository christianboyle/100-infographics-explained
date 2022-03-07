// https://kula.blog/learnjs/destructuring_5/

const data = {
  robot: {
    age: 23,
    fullname: 'C-3PO'
  },
  person: {
    age: 33,
    fullname: 'Kris'
  },
  dog: {
    age: 2,
    fullname: 'Azor'
  }
}

const {
  robot: { age, fullname }
} = data

console.log(age) // 23
console.log(fullname) // C-3PO
