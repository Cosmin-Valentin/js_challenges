// function reverseString(str) {
//     let newStr = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//       newStr += str[i]
//     }

//     return newStr
// }

const reverseString = (str) => str.split('').reverse().join('')

module.exports = reverseString
