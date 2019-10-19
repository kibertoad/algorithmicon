# The Judge

## Sample usage

```
const { implementationFn } = require('./uniqueChars')
const { TheJudge } = require('judge')

const judge = new TheJudge({
  baseDir: __dirname
})

// 'inputs' and 'outputs' are folders in root directory with matching files for inputs and outputs
judge.judgeByFiles('inputs', 'outputs', implementationFn).then((result) => {
  console.log(JSON.stringify(result))
  process.exit(0)
})

```
