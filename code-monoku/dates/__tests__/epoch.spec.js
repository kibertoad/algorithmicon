const { getDay } = require('../epoch')

describe('epoch', () => {
  describe('getDay', () => {
    it('correctly resolves day number from epoch time', () => {
      expect(getDay(0)).toEqual(0)
      expect(getDay(86399)).toEqual(0)
      expect(getDay(86400)).toEqual(1)
      expect(getDay(86401)).toEqual(1)
      expect(getDay(172800)).toEqual(2)
    })
  })
})
