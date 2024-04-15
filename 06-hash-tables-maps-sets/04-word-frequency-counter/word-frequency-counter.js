function wordFrequencyCounter(str) {
  let result = new Map()
  const wordArray = str.toLowerCase().split(/\W+/)

  for (const word of wordArray) {
    if (word === '') continue
    if (result.has(word)) {
      result.set(word, result.get(word) + 1)
    } else {
      result.set(word, 1)
    }
  }
  return result
}

module.exports = wordFrequencyCounter
