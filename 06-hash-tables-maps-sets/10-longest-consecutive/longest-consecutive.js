function longestConsecutiveSequence(nums) {
  const numsSet = new Set(nums.sort((a, b) => a - b))
  const justNums = [...numsSet]
  let i = 1

  for (let j = 0; j < justNums.length; j++) {
    if (justNums[j] === justNums[j + 1] - 1) {
      i++
    }
  }

  return i
}

module.exports = longestConsecutiveSequence
