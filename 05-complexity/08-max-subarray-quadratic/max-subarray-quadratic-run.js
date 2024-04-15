const maxSubarraySum = require('./max-subarray-quadratic')

const arr = [2, 5, 3, 1, 11, 7, 6, 4]
console.time('Calculate max time')
const result = maxSubarraySum(arr, 3)

console.log(result)
console.timeEnd('Calculate max time')
