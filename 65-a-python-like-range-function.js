const range = (begin, endExclusive, step = 1) => {
  return Array.from(
    { length: (endExclusive - begin) / step },
    (_, i) => begin + i * step
  )
}

range(0, 3).forEach((i) => console.log(i))

/*
0
1
2
*/

range(2, 10, 2).forEach((i) => console.log(i))

/*
2
4
6
8
*/
