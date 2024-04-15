function maxSubarraySum(arr, k) {
  let initialSum = 0
  let sum = 0
  for (let i = 0; i < k; i++) {
    initialSum += arr[i]
  }
  sum = initialSum
  for (let i = k; i < arr.length; i++) {
    initialSum = initialSum - arr[i - k] + arr[i]

    sum = Math.max(sum, initialSum)
  }

  return sum
}

module.exports = maxSubarraySum
