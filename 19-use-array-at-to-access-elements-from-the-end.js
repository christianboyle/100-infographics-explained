// https://dmitripavlutin.com/javascript-array-at/

var at = require('array.prototype.at/auto')

const arrayOld = [1, 2, 3, 4, 5]

console.log(arrayOld[0]) // 1
console.log(arrayOld[1]) // 2
console.log(arrayOld[arrayOld.length - 1]) // 5
console.log(arrayOld[arrayOld.length - 2]) // 4

const arrayNew = [1, 2, 3, 4, 5]

console.log(arrayNew.at(0)) // 1
console.log(arrayNew.at(1)) // 2
console.log(arrayNew.at(-1)) // 5
console.log(arrayNew.at(-2)) // 4
