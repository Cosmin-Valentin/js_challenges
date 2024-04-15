const maxSubarraySum = require('./max-subarray-linear')

const arr = [2, 5, 3, 1, 11, 7, 6, 4]
console.time('Calc max sub')
const result = maxSubarraySum(arr, 3)

console.log(result)
console.timeEnd('Calc max sub')
