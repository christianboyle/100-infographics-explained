let arr1 = ["it's Sunny in", '', 'California']

console.log(arr1.map((x) => x.split(' ')))

// [ [ 'it\'s', 'Sunny', 'in' ], [ '' ], [ 'California' ] ]

console.log(arr1.flatMap((x) => x.split(' ')))

// [ 'it\'s', 'Sunny', 'in', '', 'California' ]
