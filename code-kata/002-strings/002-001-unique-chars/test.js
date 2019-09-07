const { implementationFn } = require('./uniqueChars')
const { TheJudge } = require('../../../utils/the-judge/TheJudge')

const judge = new TheJudge({
  baseDir: __dirname
})

judge.judgeByFiles('inputs', 'outputs', implementationFn).then((result) => {
  console.log(JSON.stringify(result))
  process.exit(0)
})
