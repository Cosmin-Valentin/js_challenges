function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0)
  const averageMileage = totalMileage / cars.length
  //   let highestMileageCar = { mileage: 0 }
  //   let lowestMileageCar = { mileage: averageMileage }
  //   cars.filter((car) => {
  //     if (car.mileage > highestMileageCar.mileage) {
  //       highestMileageCar = car
  //     }
  //     if (car.mileage < lowestMileageCar.mileage) {
  //       lowestMileageCar = car
  //     }
  //   })
  const highestMileageCar = cars.reduce(
    (highest, car) => (highest.mileage < car.mileage ? car : highest),
    cars[0]
  )
  const lowestMileageCar = cars.reduce(
    (lowest, car) => (lowest.mileage > car.mileage ? car : lowest),
    cars[0]
  )
  return {
    averageMileage,
    highestMileageCar,
    lowestMileageCar,
    totalMileage
  }
}

module.exports = analyzeCarMileage
