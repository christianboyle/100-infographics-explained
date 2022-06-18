// https://appdividend.com/2019/06/20/javascript-array-copywithin-example-js-array-copywithin-tutorial/

let shows = [
  'Pink Panther',
  'Chhota Bheem',
  'Oggy',
  'Tom and Jerry',
  'Doraemon'
]

console.log(shows.copyWithin(2, 0, 2))

/*
[ 'Pink Panther',
  'Chhota Bheem',
  'Pink Panther',
  'Chhota Bheem',
  'Doraemon' ]
*/

console.log([21, 19, 46, 4, 5].copyWithin(-2)) // [ 21, 19, 46, 21, 19 ]

console.log([21, 19, 46, 4, 5].copyWithin(0, 3)) // [ 4, 5, 46, 4, 5 ]

console.log([21, 19, 46, 4, 5].copyWithin(0, 3, 4)) // [ 4, 19, 46, 4, 5 ]
