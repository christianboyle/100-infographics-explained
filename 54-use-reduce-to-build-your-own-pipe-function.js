// https://medium.com/free-code-camp/10-ways-to-write-pipe-compose-in-javascript-f6d54c575616

pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x)

double = (x) => x * 2

add1 = (x) => x + 1

pipe(double, add1)(100) // 201
