const { TrieNode } = require('./TrieNode')

/*
 Also known as prefix tree and radix tree.
 A trie can check if a string is a valid prefix in O(K) time, where K is the length of the string.
 This is the same runtime as a hash table will take. Although we often refer to hash table lookups as being O(1) time, this isn't entirely true.
 A hash table must read through all the characters in the input, which takes O(K) time in the case of a word lookup.
 */
class Trie {
  constructor() {
    this.rootNode = new TrieNode(null)
  }

  /**
   * Time complexity: O(K), K = word length
   */
  insert(word) {
    let node = this.rootNode // we start at the root

    // for every character in the word
    for (let charIndex = 0; charIndex < word.length; charIndex++) {
      const character = word[charIndex]

      // check to see if character node exists in children.
      if (!node.children[character]) {
        // if it doesn't exist, we then create it.
        const newNode = new TrieNode(character)
        node.children[character] = newNode
        newNode.parent = node
      }

      // proceed to the next depth in the trie.
      node = node.children[character]

      // finally, we check to see if it's the last word.
      if (charIndex === word.length - 1) {
        // if it is, we set the end flag to true.
        node.end = true
      }
    }
  }

  /**
   * Check if it contains a whole word.
   * Time complexity: O(K), K = word length
   */
  contains(word) {
    let node = this.rootNode

    // for every character in the word
    for (let charIndex = 0; charIndex < word.length; charIndex++) {
      const character = word[charIndex]

      // check to see if character node exists in children.
      if (node.children[character]) {
        // if it exists, proceed to the next depth of the trie.
        node = node.children[character]
      } else {
        // doesn't exist, return false since it's not a valid word.
        return false
      }
    }

    // we finished going through all the words, but is it a whole word?
    return node.end
  }

  /**
   * Returns every word with given prefix
   * Time complexity: O(P + N), P = prefix length, N = number of child paths
   */
  find(prefix) {
    let node = this.rootNode
    const foundWords = []

    // for every character in the prefix
    for (let i = 0; i < prefix.length; i++) {
      // make sure prefix actually has words
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]]
      } else {
        // there's none. just return it.
        return []
      }
    }

    // recursively find all words in the node
    const prefixEndNode = node
    prefixEndNode.findAllWords(foundWords)

    return foundWords
  }
}

module.exports = {
  Trie
}
