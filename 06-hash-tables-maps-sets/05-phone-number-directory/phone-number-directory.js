function phoneNumberDirectory(phoneNumbers) {
  let result = new Map()
  phoneNumbers.forEach((el) => {
    const [name, number] = el.split(':')
    if (!result.has(name)) {
      result.set(name, number)
    }
  })
  return result
}

module.exports = phoneNumberDirectory
