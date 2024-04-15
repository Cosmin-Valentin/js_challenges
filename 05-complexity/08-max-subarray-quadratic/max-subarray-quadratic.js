function maxSubarraySum(arr, k) {
  let result = -Infinity
  for (let i = 0; i < arr.length - k; i++) {
    let initialResult = 0
    for (let j = i; j < k + i; j++) {
      initialResult += arr[j]
    }

    result = Math.max(result, initialResult)
  }
  return result
}

module.exports = maxSubarraySum
