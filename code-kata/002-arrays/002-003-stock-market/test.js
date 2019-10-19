const { implementationFn } = require('./stockMarket')
const { TheJudge } = require('../../../utils/the-judge')

const judge = new TheJudge({
  baseDir: __dirname
})

judge.judgeByFiles('inputs', 'outputs', implementationFn).then((result) => {
  console.log(JSON.stringify(result))
  process.exit(0)
})
