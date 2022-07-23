// https://www.youtube.com/watch?v=rf6uf3jNjbo&t=438s

// https://javascript.plainenglish.io/understanding-recursion-by-implementing-the-tower-of-hanoi-in-javascript-a83a54a62f40

resolver_tower_of_hanoi = function (source, destination, intermediate, discs) {
  // terminating condition
  if (discs <= 0) {
    return
  }

  resolver_tower_of_hanoi(source, intermediate, destination, discs - 1)

  console.log(`Move Disk-${discs} FROM ${source} TO ${destination}`)

  resolver_tower_of_hanoi(intermediate, destination, source, discs - 1)
}

resolver_tower_of_hanoi('source', 'destination', 'intermediate', 3)

/*
Move Disk-1 FROM source TO destination
Move Disk-2 FROM source TO intermediate
Move Disk-1 FROM destination TO intermediate
Move Disk-3 FROM source TO destination
Move Disk-1 FROM intermediate TO source
Move Disk-2 FROM intermediate TO destination
Move Disk-1 FROM source TO destination
*/
