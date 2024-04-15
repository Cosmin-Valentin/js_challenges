const HashTable = require('./HashTable')

function wordInstanceCounter(str, word) {
  const wordFrequency = new HashTable()
  const strArray = str.toLowerCase().split(/\W+/)
  const targetWord = word.toLowerCase()

  for (const el of strArray) {
    if (el === '') continue

    if (!wordFrequency.has(el)) {
      wordFrequency.set(el, 1)
    } else {
      wordFrequency.set(el, wordFrequency.get(el) + 1)
    }
  }
  return wordFrequency.get(targetWord)
}

module.exports = wordInstanceCounter
