function areAllCharactersUnique(str) {
  if (str.length === 0 || str.length === 1) return true

  let uniqueStr = new Set(str.split(''))
  uniqueStr = [...uniqueStr].join('')

  if (uniqueStr === str) return true
  return false
}

module.exports = areAllCharactersUnique
