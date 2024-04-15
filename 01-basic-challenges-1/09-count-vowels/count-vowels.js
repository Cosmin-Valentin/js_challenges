function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0
  str = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++
    }
  }
  return count
}

module.exports = countVowels
