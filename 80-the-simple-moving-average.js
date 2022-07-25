// https://blog.oliverjumpertz.dev/the-moving-average-simple-and-exponential-theory-math-and-implementation-in-javascript

// https://dirask.com/posts/JavaScript-moving-average-DZPeaj

// https://www.youtube.com/watch?v=cNgIwmldphs

function caculateMovingAverage(data, window) {
  var result = []
  if (data.length < window) {
    return result
  }
  var sum = 0
  for (var i = 0; i < window; ++i) {
    sum += data[i]
  }
  result.push(sum / window)
  var steps = data.length - window - 1
  for (var i = 0; i < steps; ++i) {
    sum -= data[i]
    sum += data[i + window]
    result.push(sum / window)
  }
  return result
}

var data = [8, 13, 6, 9, 12, 5, 22, 13, 8, 17]
var average = caculateMovingAverage(data, 4)

console.log(average) // [ 9, 10, 8, 12, 13, 12 ]
