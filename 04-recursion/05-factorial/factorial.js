// function factorial(n) {
//   if (n <= 1) {
//     return 1
//   }

//   return factorial(n - 1) * n
// }

const factorial = (n) => (n <= 1 ? 1 : factorial(n - 1) * n)

module.exports = factorial
