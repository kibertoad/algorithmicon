const secondsInDay = 86400 // Note that epoch time is in seconds

function getDay(epochTime) {
  // Resolve integer part of the quotient
  return Math.floor(epochTime / secondsInDay)
}

module.exports = { getDay }
