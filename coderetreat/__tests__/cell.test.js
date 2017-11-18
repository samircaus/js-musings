const gameOfLife = require('./../gameOfLife')

describe('Game of life', () => {
  test('If empty grid, next iteration will be empty', () => {
    let nextGeneration = gameOfLife.doNextIteration([])
    expect(nextGeneration.length).toBe(0)
  })
  test('If only one cell, next generation will be empty', () => {
    let nextGeneration = gameOfLife.doNextIteration([[1, 2]])
    expect(nextGeneration.length).toBe(0)
  })
  test('If two cells, next generation will be empty', () => {
    let nextGeneration = gameOfLife.doNextIteration([[1, 2], [2, 3]])
    expect(nextGeneration.length).toBe(0)
  })
  test('If three neigbouring cells, next generation will have only middle one', () => {
    let nextGeneration = gameOfLife.doNextIteration([[1, 2], [2, 2], [3, 2]])
    expect(nextGeneration.length).toBe(1)
    expect(nextGeneration[0][0]).toBe(2)
    expect(nextGeneration[0][1]).toBe(2)
  })
  test('If three non neigbouring cells, next generation will be empty', () => {
    let nextGeneration = gameOfLife.doNextIteration([[1, 1], [3, 3], [5, 2]])
    expect(nextGeneration.length).toBe(0)
  })
  test('compare empty array', () => {
    expect([] === []).toBe(false)
  })
})

describe('Are neighbours', () => {
  test('Completely far cells are not neigbours', () => {
    expect(gameOfLife.areNeigbours([1, 2], [6, 7])).toBe(false)
  })
  test('Neigbouring cells are neigbours', () => {
    expect(gameOfLife.areNeigbours([1, 2], [0, 1])).toBe(true)
  })
  test('Neigbouring cells are neigbours', () => {
    expect(gameOfLife.areNeigbours([1, 1], [2, 2])).toBe(true)
  })
  test('Same row, far away not neigbours', () => {
    expect(gameOfLife.areNeigbours([1, 1], [1, 12])).toBe(false)
  })
  test('Multi coordinates test', () => {
    let matrix = [
      [[0, 1], [0, 2], true],
      [[0, 1], [0, 5], false],
      [[1, 1], [2, 2], true],
      [[0, 1], [0, 6], false],
      [[0, 1], [0, 6], false]
    ]
    matrix.forEach(r => expect(gameOfLife.areNeigbours(r[0], r[1])).toBe(r[2]))
  })
})

describe.only('Count neighbours', () => {
  test('Count neighbours', () => {
    expect(gameOfLife.countNeigbours([[1, 2], [2, 2], [3, 3]], 1)).toBe(2)
  })
})
