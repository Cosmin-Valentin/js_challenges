function anagramGrouping(words) {
  let result = new Map()

  words.forEach((word) => {
    const sortedWord = word.split('').sort().join('')

    if (result.has(sortedWord)) {
      result.get(sortedWord).push(word)
    } else {
      result.set(sortedWord, [word])
    }
  })

  return Array.from(result.values())
}

module.exports = anagramGrouping
