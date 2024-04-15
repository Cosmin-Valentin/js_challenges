function findMaxNumber(arr) {
  let i = 0
  arr.forEach((number) => {
    if (i < number) {
      i = number
    }
  })
  return i
}

module.exports = findMaxNumber
