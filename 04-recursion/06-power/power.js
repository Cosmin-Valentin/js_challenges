function power(base, exponent) {
  if (exponent === 0) {
    return 1
  }

  return power(base, exponent - 1) * base
}

const power = (base, exponent) =>
  exponent === 0 ? 1 : power(base, exponent - 1) * base

module.exports = power
