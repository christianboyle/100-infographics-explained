// https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c

const person1 = {
  name: 'Jack',
  age: 34
}

console.log(person1.job || 'unemployed') // unemployed

const person2 = {
  name: 'Chris',
  age: 40,
  job: 'dev'
}

console.log(person2.job || 'unemployed') // dev
