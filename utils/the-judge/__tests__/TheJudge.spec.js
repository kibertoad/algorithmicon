const { TheJudge } = require('../TheJudge')

describe('The Judge', () => {
  describe('judgeByFile', () => {
    it('accepts correct answer', () => {
      const judge = new TheJudge({
        baseDir: __dirname
      })
      const implementationFn = (inputLines) => {
        return inputLines.map((inputLine) => {
          const columns = inputLine.split(' ')
          return Number.parseInt(columns[0]) + Number.parseInt(columns[1])
        })
      }

      return judge.judgeByFiles('happy-input', 'happy-output', implementationFn).then((result) => {
        expect(result.errors.length).toEqual(0)
      })
    })

    it('rejects incorrect answers', () => {
      const judge = new TheJudge({
        baseDir: __dirname
      })
      const implementationFn = (inputLines) => {
        return inputLines.map((inputLine) => {
          const columns = inputLine.split(' ')
          return Number.parseInt(columns[0]) + Number.parseInt(columns[1])
        })
      }

      return judge
        .judgeByFiles('unhappy-input', 'unhappy-output', implementationFn)
        .then((result) => {
          expect(result.errors.length).toEqual(2)
          expect(result.errors).toMatchSnapshot()
        })
    })
  })
})
