function diceGameSimulation(num) {
  const results = []
  while (num > 0) {
    results.push(getGameSimulation())
    num--
  }
  return results
}

function getGameSimulation() {
  let game = {}
  game.dice1 = getRandom()
  game.dice2 = getRandom()
  game.sum = game.dice1 + game.dice2
  if (game.sum === 7 || game.sum === 11) {
    game.result = 'win'
  } else if (game.sum === 2 || game.sum === 3 || game.sum === 12) {
    game.result = 'lose'
  } else {
    game.result = 'roll again'
  }
  return game
}

function getRandom() {
  return Math.floor(Math.random() * 6) + 1
}

module.exports = diceGameSimulation
