class StepCounter {
  constructor() {
    this.stepsExecuted = 0
  }

  executeStep() {
    this.stepsExecuted++
  }
}

module.exports = {
  StepCounter
}
