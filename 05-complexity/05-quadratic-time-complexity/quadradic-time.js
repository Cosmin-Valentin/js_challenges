/*
Quadradic Time O(n^2)

Quadradic time means that the time required to complete a function is proportional to the square of the input data set.
*/
function sum(arr) {
  let result1 = 0
  let result2 = 0
  for (let i = 0; i < arr.length; i++) {
    result1 += arr[i]
    for (let j = 0; j < arr.length; j++) {
      result2 += arr[j]
    }
  }
  return result1 + result2
}

const array1 = [1, 2, 3, 4, 5]
const array2 = Array.from({ length: 10000 }, (_, index) => index + 1)

console.time('Calculate array1 sum')
console.log(sum(array1))
console.timeEnd('Calculate array1 sum') // Calculate array1 sum: 5.056ms

console.time('Calculate array2 sum')
console.log(sum(array2))
console.timeEnd('Calculate array2 sum') // Calculate array2 sum: 85.219ms
