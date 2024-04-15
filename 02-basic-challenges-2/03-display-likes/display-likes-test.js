const displayLikes = require('./display-likes')
describe('#displayLikes', () => {
  test('empty array', () => {
    expect(displayLikes([])).toEqual('no one likes this')
  })
  test('one item array', () => {
    expect(displayLikes(['Peter'])).toEqual('Peter likes this')
  })
  test('two item array', () => {
    expect(displayLikes(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this')
  })
  test('three item array', () => {
    expect(displayLikes(['Max', 'John', 'Mark'])).toEqual(
      'Max, John and Mark like this'
    )
  })
  test('four item array', () => {
    expect(displayLikes(['Alex', 'Jacob', 'Mark', 'Max'])).toEqual(
      'Alex, Jacob and 2 others like this'
    )
  })
  test('five item array', () => {
    expect(displayLikes(['Alex', 'Jacob', 'Mark', 'Max', 'Jill'])).toEqual(
      'Alex, Jacob and 3 others like this'
    )
  })
})
