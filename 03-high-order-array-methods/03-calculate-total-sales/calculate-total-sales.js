function calculateTotalSalesWithTax(products, taxRate) {
  //   let totalNoTax = 0
  //   products.forEach((product) => {
  //     totalNoTax += product.price * product.quantity
  //   })
  const totalNoTax = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  )
  const tax = (taxRate / 100) * totalNoTax
  return totalNoTax + tax
}

module.exports = calculateTotalSalesWithTax
