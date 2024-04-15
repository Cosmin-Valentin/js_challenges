function fibonacci(n) {
  if (n < 2) {
    return n
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}

const fibonacci = (num) =>
  num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2)

module.exports = fibonacci
