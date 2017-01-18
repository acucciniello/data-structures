var PrefixNode = require('./prefix-node.js')

var Trie = function () {
  this.root = new PrefixNode()
}

Trie.prototype.insert = function (word) {
  // check if already exists
  var curr = this.root
  var skip = false
  for (var i = 0; i < word.length; i++) {
    for (var j = 0; j < curr.children.length; j++) {
      if (curr.children[j].data === word.charAt(i)) {
        curr = curr.children[j]
        skip = true
      }
    }
    if (skip === true) {
      skip = false
      continue
    } else {
      var prefixNode = new PrefixNode(word.charAt(i))
      curr.children.push(prefixNode)
      curr = curr.children[curr.children.length - 1]
    }
  }
  var terminatingNode = new PrefixNode('*')
  curr.children.push(terminatingNode)
}

module.exports = Trie
