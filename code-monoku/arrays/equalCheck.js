/**
 * Returns true if arrays have equal elements in them, in same order, or false otherwise
 */
function arraysEqual(array1, array2) {
  return array1.length === array2.length && array1.every((value, index) => value === array2[index])
}

module.exports = {
  arraysEqual
}
