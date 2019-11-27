class TrieNode {
  constructor(key) {
    // the "key" value will be the character in sequence
    this.key = key

    this.parent = null

    // we have hash table of children, where key is a character
    this.children = {}

    // check to see if the node is at the end (meaning it finishes forming a complete word)
    this.end = false
  }

  /**
   * Iterates through parent nodes until reaching the top to build the word
   */
  getWord() {
    const output = []
    let node = this

    while (node !== null) {
      output.unshift(node.key) // Inserts new character at the start of an output
      node = node.parent
    }

    return output.join('')
  }

  /**
   * Recursive function to find all words in the node.
   */
  findAllWords(foundWords) {
    // if node is at a word, push to output
    if (this.end) {
      foundWords.unshift(this.getWord())
    }

    // iterate through each children, call recursive findAllWords
    for (let child in this.children) {
      const childNode = this.children[child]
      childNode.findAllWords(foundWords)
    }
  }
}

module.exports = {
  TrieNode
}
