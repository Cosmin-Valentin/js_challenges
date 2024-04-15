function findMissingLetter(arr) {
  const uniCodes = arr.map((item) => item.charCodeAt(0))

  let missingCode = uniCodes.find((item, index, array) => {
    if (array[index + 1] - 1 > item) {
      return item
    }
  })
  return String.fromCharCode(parseInt(missingCode) + 1)
}

module.exports = findMissingLetter
