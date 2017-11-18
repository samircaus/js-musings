const gol = require('./../gameOfLife')

const matrix = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0]
]

describe.only('The game of life', () => {
  test('Return number of neigbouring live cells on a dead matrix', () => {
    const cell = [1, 1]
    expect(gol.getNeigbourLiveCount(cell, matrix)).toBe(0)
  }),
    test('Return 1 live cell', () => {
      const cell = [4, 3]
      expect(gol.getNeigbourLiveCount(cell, matrix)).toBe(1)
    }),
    test('Not blow up on high corner', () => {
      const cell = [5, 5]
      expect(() => {
        gol.getNeigbourLiveCount(cell, matrix)
      }).not.toThrow()
    })
})
