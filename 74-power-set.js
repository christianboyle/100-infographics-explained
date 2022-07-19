// https://gist.github.com/messerc/90f1dcf13cac776dd36b74f677c83a22?permalink_comment_id=3972730#gistcomment-3972730

const powerSet = (arr) =>
  arr.reduce(
    (subsetsSoFar, elem) =>
      subsetsSoFar.concat(subsetsSoFar.map((subset) => subset.concat(elem))),
    [[]]
  )

const stringPowerSet = (str) =>
  powerSet([...str])
    .map((subset) => subset.sort().join(''))
    .sort() // optional sorting for aesthetics
    .sort((a, b) => a.length - b.length)

console.log(powerSet([1, 2, 3, 4]))

/*
[
  [],          [ 1 ],
  [ 2 ],       [ 1, 2 ],
  [ 3 ],       [ 1, 3 ],
  [ 2, 3 ],    [ 1, 2, 3 ],
  [ 4 ],       [ 1, 4 ],
  [ 2, 4 ],    [ 1, 2, 4 ],
  [ 3, 4 ],    [ 1, 3, 4 ],
  [ 2, 3, 4 ], [ 1, 2, 3, 4 ]
]
*/

console.log(stringPowerSet('abcde'))

/*
[
  '',     'a',    'b',    'c',
  'd',    'e',    'ab',   'ac',
  'ad',   'ae',   'bc',   'bd',
  'be',   'cd',   'ce',   'de',
  'abc',  'abd',  'abe',  'acd',
  'ace',  'ade',  'bcd',  'bce',
  'bde',  'cde',  'abcd', 'abce',
  'abde', 'acde', 'bcde', 'abcde'
]
*/
