// https://stackoverflow.com/a/47725117

var creatureArray, creatureObject

creatureArray = [
  ['zombie', 30, 1, 'bite', 0, 5],
  ['skeleton', 10, 2, 'sword', 1, 10],
  ['orc', 15, 4, 'club', 1, 7]
]

creatureObject = creatureArray.reduce((accumulator, currentValue) => {
  return [...accumulator, ['species', ...currentValue]]
}, [])

console.log(creatureObject)

/*

[
  [ 'species', 'zombie', 30, 1, 'bite', 0, 5 ],
  [ 'species', 'skeleton', 10, 2, 'sword', 1, 10 ],
  [ 'species', 'orc', 15, 4, 'club', 1, 7 ]
]

*/
