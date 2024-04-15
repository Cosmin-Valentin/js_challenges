function arraySum(arr) {
  if (arr.length === 0) {
    return 0
  }

  const [first, ...rest] = arr
  return arraySum(rest) + first
}

module.exports = arraySum
