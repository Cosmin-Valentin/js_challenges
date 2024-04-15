function numberRange(startNum, endNum) {
  if (startNum === endNum) {
    return [endNum]
  }

  const array = numberRange(startNum, endNum - 1)
  array.push(endNum)
  return array
}

module.exports = numberRange
