const isValidIPv4 = (string) => {
  return string.split('.').every((str, index, array) => {
    const num = parseFloat(str)
    return 0 <= num && num <= 255 && str.charAt(0) !== '0' && array.length === 4
  })
}

module.exports = isValidIPv4
