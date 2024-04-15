function validAnagrams(str1, str2) {
  //   let obj1 = {}
  //   Array.from(str1).forEach((letter) => {
  //     !obj1[letter] ? (obj1[letter] = 1) : obj1[letter]++
  //   })
  //   let obj2 = {}
  //   Array.from(str2).forEach((letter) => {
  //     !obj2[letter] ? (obj2[letter] = 1) : obj2[letter]++
  //   })
  //   if (obj1.length === obj2.length) {
  //     return Object.keys(obj1).every(
  //       (key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]
  //     )
  //   }
  //   return false

  const str1Freq = str1.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1
    return acc
  }, {})
  const str2Freq = Array.from(str2).reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1
    return acc
  }, {})
  if (str1Freq.length === str2Freq.length) {
    return Object.keys(str1Freq).every((key) => str1Freq[key] === str2Freq[key])
  }
  return false
}

module.exports = validAnagrams
