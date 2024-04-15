/*
  Linear Time O(n)

  Linear time means that the time required to complete a function is directly proportional to the size of the input data set.
*/
function sum(arr) {
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
  }

  return result
}

const array1 = [1, 2, 3, 4, 5]
const array2 = Array.from({ length: 10000000 }, (_, index) => index + 1)

console.time('Calculate array1 sum')
console.log(sum(array1))
console.timeEnd('Calculate array1 sum') // Calculate array1 sum: 4.992ms

console.time('Calculate array2 sum')
console.log(sum(array2))
console.timeEnd('Calculate array2 sum') // Calculate array2 sum: 9.61ms
