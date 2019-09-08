const LETTERS_IN_ALPHABET = 26
const POSSIBLE_UNIQUE_SYMBOLS_AMOUNT = LETTERS_IN_ALPHABET * 2 // We multiply by 2 because check is case-sensitive

function implementationFn(inputLines) {
  const inputString = inputLines[0]

  // Early return if it's definitely impossible to have all unique characters
  if (inputString.length > POSSIBLE_UNIQUE_SYMBOLS_AMOUNT) {
    return false
  }
  const lettersEncountered = {}

  for (let i = 0; i < inputString.length; i++) {
    const charCode = inputString.charCodeAt(i)
    if (lettersEncountered[charCode]) {
      return false
    }
    lettersEncountered[charCode] = true
  }

  return true
}

module.exports = {
  implementationFn
}
