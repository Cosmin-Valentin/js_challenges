function highestScoringWord(str) {
  // const words = str.split(' ')
  // let wordValue = 0
  // let wordIndex = 0
  // words.forEach((word, index) => {
  //   let values = []
  //   for (let char of word.toLowerCase()) {
  //     values.push(char.charCodeAt(0) - 96)
  //   }
  //   if (values.reduce((sum, val) => sum + val, 0) > wordValue) {
  //     wordValue = values.reduce((sum, val) => sum + val, 0)
  //     wordIndex = index
  //   }
  // })
  // return words[wordIndex]

  const words = str.split(' ')
  const scores = words.map((word) => {
    return Array.from(word).reduce(
      (sum, letter) => sum + letter.charCodeAt(0) - 96,
      0
    )
  })

  const highestScore = Math.max(...scores)
  const scoreIndex = scores.indexOf(highestScore)

  return words[scoreIndex]
}

module.exports = highestScoringWord
