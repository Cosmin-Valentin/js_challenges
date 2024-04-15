function twoSum(nums, target) {
  let result = new Set()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (result.has(complement)) {
      return [nums.indexOf(complement), i]
    }
    result.add(nums[i])
  }

  return []
}

module.exports = twoSum
