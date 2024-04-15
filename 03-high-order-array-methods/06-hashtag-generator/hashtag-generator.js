function generateHashtag(str) {
  //   const hash =
  //     '#' +
  //     str
  //       .split(/\s+/)
  //       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //       .join('')

  //   if (hash.length > 140 || str.trim() === '') return false
  //   return hash

  const hash = str.split(' ').reduce((acc, word) => {
    return acc + word.charAt(0).toUpperCase() + word.substring(1)
  }, '#')

  return hash.length === 1 || hash.length > 140 ? false : hash
}
module.exports = generateHashtag
