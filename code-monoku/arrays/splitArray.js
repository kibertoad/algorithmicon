// Modifies original array, removes specified amount of elements from beginning and returns as a result of function execution
function splitArrayFromBeginning(sourceArray, elementNumberToTake) {
  return sourceArray.splice(0, elementNumberToTake)
}

module.exports = {
  splitArrayFromBeginning
}
