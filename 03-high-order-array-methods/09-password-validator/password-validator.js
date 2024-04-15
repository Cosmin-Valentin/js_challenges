function validatePassword(password) {
  const isLongEnough = password.length >= 8
  const hasUpperCase = password
    .split('')
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase())
  const hasLowerCase = password
    .split('')
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase())
  const hasDigit = password.split('').some((char) => !isNaN(parseInt(char)))

  return isLongEnough && hasLowerCase && hasUpperCase && hasDigit
}

module.exports = validatePassword
