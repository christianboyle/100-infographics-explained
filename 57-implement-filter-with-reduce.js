// https://stackoverflow.com/a/57701349

const filteredMap = (filter, mapping) => {
  return (arr) =>
    Array.prototype.reduce.call(
      arr,
      (accumulator, value) => {
        if (filter(value)) accumulator.push(mapping(value))
        return accumulator
      },
      []
    )
}

const getOwners = filteredMap(
  (dog) => dog.breed == 'Pug',
  (dog) => dog.owner
)

getOwners([
  { name: 'Archie', breed: 'Lurcher', owner: 'Jack' },
  { name: 'Charlie', breed: 'Pug', owner: 'John' },
  { name: 'Buddy', breed: 'Pug', owner: 'Mike' }
]) // => [ 'John', 'Mike' ]
