function symmetricDifference(arr1, arr2) {
  const arraySet1 = new Set(arr1)
  const arraySet2 = new Set(arr2)

  arraySet2.forEach((el) => {
    if (!arraySet1.has(el)) {
      arraySet1.add(el)
    } else {
      arraySet1.delete(el)
    }
  })

  return [...arraySet1]
}

module.exports = symmetricDifference
