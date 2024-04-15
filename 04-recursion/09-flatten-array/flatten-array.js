function flattenArray(arr) {
  let flatArray = []
  arr.forEach((el) => {
    if (typeof el !== 'object') {
      flatArray.push(el)
    } else {
      flatArray = flatArray.concat(flattenArray(el))
    }
  })
  return flatArray
}

module.exports = flattenArray
