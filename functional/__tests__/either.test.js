const Right = require('../either').Right
const Left = require('../either').Left
const fromNullable = require('../either').fromNullable
const Either = require('../either').Either

// TODO: Clean up test suite.

describe.skip('The Right type', () => {
  test('Implement a map function', () => {
    const notExpected = undefined
    const actual = Right(1).map
    expect(actual).not.toBe(notExpected)
  })
  test('Return another Right when mapped over', () => {
    const expected = Right(2).toString()
    const actual = Right(1)
      .map(x => x + 1)
      .toString()
    expect(actual).toBe(expected)
  })
  test('Implement a fold function', () => {
    const notExpected = undefined
    const actual = Right(1).fold
    expect(actual).not.toBe(notExpected)
  })
  test('Unwrap on the right when folded over', () => {
    const expected = 2
    const actual = Right(1).fold(x => 'Error', x => x + 1)
    expect(actual).toBe(expected)
  })
})

describe.skip('The Left type', () => {
  test('Implement a map function', () => {
    const notExpected = undefined
    const actual = Left(1).map
    expect(actual).not.toBe(notExpected)
  })
  test('Ignore maps', () => {
    const expected = Left(1).toString()
    const actual = Left(1).toString()
    expect(actual).toBe(expected)
  })
  test('Implement a fold function', () => {
    const notExpected = undefined
    const actual = Left(1).fold
    expect(actual).not.toBe(notExpected)
  })
  test('Unwrap on the left when folded over', () => {
    const expected = 'Error'
    const actual = Left(1).fold(x => 'Error', x => x + 1)
    expect(actual).toBe(expected)
  })
})

describe.skip('fromNullable', () => {
  test('should return a Right when argument is not null, undefined or NaN', () => {
    const expected = Right(1).toString()
    const actual = fromNullable(1).toString()
    expect(actual).toBe(expected)
  })
  test('should return a Left when argument is null', () => {
    const expected = Left(null).toString()
    const actual = fromNullable(null).toString()
    expect(actual).toBe(expected)
  })
  test('should return a Left when argument is undefined', () => {
    const expected = Left(undefined).toString()
    const actual = fromNullable(undefined).toString()
    expect(actual).toBe(expected)
  })
})

describe.skip('The Either type', () => {
  test('Implement an of function', () => {
    const notExpected = undefined
    const actual = Either.of
    expect(actual).not.toBe(notExpected)
  })

  test('Return a Right when argument is not null or undefined (from of)', () => {
    const expected = Right(1).toString()
    const actual = Either.of(1).toString()
    expect(actual).toBe(expected)
  })
  test('Return a Left when argument is either null or undefined (from of)', () => {
    const expected = Left(undefined).toString()
    const actual = Either.of(undefined).toString()
    expect(actual).toBe(expected)
  })
})
