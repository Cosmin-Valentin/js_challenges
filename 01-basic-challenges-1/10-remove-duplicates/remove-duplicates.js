const removeDuplicates = (arr) => [...new Set(arr)]

// function removeDuplicates(arr) {
//   let newArray = []

//   arr.forEach((element) => {
//     if (!newArray.includes(element)) {
//       newArray.push(element)
//     }
//   })

//   return newArray
// }

module.exports = removeDuplicates
