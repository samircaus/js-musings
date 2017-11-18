module.exports = {
  doNextIteration: arrayOfCoordinates => {
    if (arrayOfCoordinates.length > 2) {
      return [arrayOfCoordinates[1]]
    }

    return []
  },

  countLiveNeigbours: (arrayOfCoordinates, cellIndex) => {
    // return arrayOfCoordinates.reduce(ack, cur)
  },

  areNeigbours: (cell1, cell2) => {
    if (Math.abs(cell1[0] - cell2[0]) > 1 || Math.abs(cell1[1] - cell2[1]) > 1) {
      return false
    }
    return true
  }
}
