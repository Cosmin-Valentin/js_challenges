function findFirstNonRepeatingCharacter(str) {
  let charMap = new Map()
  for (let i = 0; i < str.length; i++) {
    if (!charMap.has(str[i])) {
      charMap.set(str[i], false)
    } else {
      charMap.set(str[i], true)
    }
  }
  for (let [key, value] of charMap.entries()) {
    if (value === false) {
      return key
    }
  }
  return null
}

module.exports = findFirstNonRepeatingCharacter
