function arrayIntersection(arr1, arr2) {
  let arr = []
  arr1.forEach((el) => {
    if (arr2.includes(el) && !arr.includes(el)) {
      arr.push(el)
    }
  })

  return arr
}

// function arrayIntersection(arr1, arr2) {
//   let arr = []
//   arr1 = new Set(arr1)
//   arr2.forEach((el) => {
//     if (arr1.has(el)) {
//       arr.push(el)
//     }
//   })
//   return arr
// }

module.exports = arrayIntersection
