function validateEmail(str) {
  //   if (str.indexOf('.') !== -1 && str.indexOf('@') !== -1) {
  //     if (str.substring(0, str.indexOf('@')).length > 0) {
  //       return true
  //     }
  //   }
  //   return false
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return emailRegex.test(str)
}

module.exports = validateEmail
