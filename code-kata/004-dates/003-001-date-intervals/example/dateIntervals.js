const secondsInDay = 86400 // Note that epoch time is in seconds

function implementationFn(inputLines) {
  const daysWithEvents = {}
  let eventsOnSharedDayCounter = 0

  inputLines.forEach((inputLine) => {
    const inputValues = inputLine.split(' ')
    const startTime = Number.parseInt(inputValues[0])
    const endTime = Number.parseInt(inputValues[1])
    const startDay = getDay(startTime)
    const endDay = getDay(endTime)

    let isEventOnSharedDay = false
    for (let i = startDay; i <= endDay; i++) {
      if (daysWithEvents[i]) {
        isEventOnSharedDay = true
      } else {
        daysWithEvents[i] = true
      }
    }

    if (isEventOnSharedDay) {
      eventsOnSharedDayCounter++
    }
  })

  return eventsOnSharedDayCounter
}

function getDay(epochTime) {
  // Resolve integer part of the quotient
  return Math.floor(epochTime / secondsInDay)
}

module.exports = {
  implementationFn
}
