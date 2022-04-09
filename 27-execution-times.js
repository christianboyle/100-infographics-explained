const { performance } = require('perf_hooks')

const start = new Date()
for (i = 0; i < 50000; ++i) {
  // do something
}
const end = new Date()
const ellapsedTime = end.getTime() - start.getTime()
console.log(ellapsedTime) // 2

const startPerf = performance.now()
for (i = 0; i < 50000; ++i) {
  // do something
}
const endPerf = performance.now()
const ellapsedTimePerf = endPerf - startPerf
console.log(ellapsedTimePerf) // 1.219599962234497
