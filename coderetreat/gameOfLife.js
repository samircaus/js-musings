module.exports = {
  getNeigbourLiveCount: (cell, matrix) => {
    let [x, y] = cell

    const getMatrixValue = ([coordX, coordY]) => {
      if (coordX < 0 || coordY < 0) {
        return 0
      } else if (coordX > matrix.length - 1) {
        return 0
      } else if (coordY > matrix[0].length - 1) {
        return 0
      }
      return matrix[coordX][coordY]
    }

    const neighbours = []
    neighbours.push(getMatrixValue([x - 1, y - 1]))
    neighbours.push(getMatrixValue([x, y - 1]))
    neighbours.push(getMatrixValue([x + 1, y - 1]))
    neighbours.push(getMatrixValue([x - 1, y]))
    neighbours.push(getMatrixValue([x + 1, y]))
    neighbours.push(getMatrixValue([x - 1, y + 1]))
    neighbours.push(getMatrixValue([x, y + 1]))
    neighbours.push(getMatrixValue([x + 1, y + 1]))

    return neighbours.reduce((acc, cur) => acc + cur, 0)
  }
}
