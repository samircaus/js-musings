const equalArrays = require('../equalarrays')

describe.skip('The equalarrays function', () => {
  test('Should compare if 2 arrays have the same content', () => {
    const expected = true
    const actual = equalArrays([1, 2])([1, 2])
    expect(actual).toBe(expected)
  })
  test('Should compare if 2 arrays have different content', () => {
    const expected = false
    const actual = equalArrays([1, 2])(['hello', 'world'])
    expect(actual).toBe(expected)
  })
  test('Should not care if the order of the compared arrays is different', () => {
    const expected = true
    const actual = equalArrays([1, 2])([2, 1])
    expect(actual).toBe(expected)
  })
})
