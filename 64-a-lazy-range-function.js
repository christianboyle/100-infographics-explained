function* range(begin, endExclusive, step = 1) {
  let current = begin
  while (current < endExclusive) {
    yield current
    current += step
  }
}

for (const value of range(0, 5)) {
  console.log(value) // 0, 1, 2, 3, 4
}

for (const value of range(0, 10, 2)) {
  console.log(value) // 0, 2, 4, 6, 8
}
