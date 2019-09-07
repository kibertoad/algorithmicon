const LETTERS_START_CODE = 65
const LETTERS_END_CODE = 90

function generateOrderedStrings(size) {
  const result = []

  for (let i = 0; i < size; i++) {

    const char = String.fromCharCode(LETTERS_START_CODE + (i % (LETTERS_END_CODE - LETTERS_START_CODE)))
    result.push(char)
  }

  return result
}

function generateOrderedNumbers(size) {
  const result = []

  for (let i = 0; i < size; i++) {
    result.push(i + 1)
  }

  return result
}

function generateUnorderedNumbers(size) {
  return shuffle(generateOrderedNumbers(size))
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

module.exports = {
  generateOrderedNumbers,
  generateOrderedStrings,
  generateUnorderedNumbers
}
