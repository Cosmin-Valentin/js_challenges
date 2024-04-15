function findMissingLetter(arr) {
  const firstIndex = arr[0].charCodeAt(0)
  const lastIndex = arr[arr.length - 1].charCodeAt(0)
  let missingLetter
  for (let i = firstIndex; i <= lastIndex; i++) {
    if (!arr.includes(String.fromCharCode(i))) {
      missingLetter = String.fromCharCode(i)
    }
  }
  return missingLetter
}

module.exports = findMissingLetter
