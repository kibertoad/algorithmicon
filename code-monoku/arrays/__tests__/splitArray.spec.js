const { splitArrayFromBeginning } = require('../splitArray')

describe('splitArray', () => {
  it('split from the beginning, take N elements', () => {
    const input = [1, 2, 3, 4, 5]
    const result = splitArrayFromBeginning(input, 3)
    expect(result).toEqual([1, 2, 3])
    expect(input).toEqual([4, 5])
  })
})
