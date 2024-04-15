/*
  Example of constant time O(1)

  Constant time means that the time required to complete a function is the same regardless of the size of the input data set.
*/
function accessElement(arr, index) {
  return arr[index]
}

const array1 = [1, 2, 3, 4, 5]
const array2 = Array.from({ length: 1000 }, (_, index) => index + 1)

console.time('Access Element 1')
console.log(accessElement(array1, 1))
console.timeEnd('Access Element 1') // Access Element 1: 5.012ms

console.time('Access Element 2')
console.log(accessElement(array2, 1))
console.timeEnd('Access Element 2') // Access Element 2: 4.737ms
