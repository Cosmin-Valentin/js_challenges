function calculator(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return a / b
    default:
      return console.error('errorrr')
  }
}

module.exports = calculator
