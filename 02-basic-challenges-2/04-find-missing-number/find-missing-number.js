function findMissingNumber(arr) {
  if (arr.length === 0) return 1

  const n = arr.length + 1
  const expectedSum = (n * (n + 1)) / 2

  //   let actualSum = 0
  //   arr.forEach((num) => (actualSum += num))
  let actualSum = arr.reduce((sum, num) => sum + num, 0)

  return expectedSum - actualSum
}

module.exports = findMissingNumber
