var test = require('tape')
var PrefixNode = require('./prefix-node.js')
var Trie = require('./trie.js')

test('creating a Prefix Node', function (t) {
  var prefixNode = new PrefixNode('a')
  t.equal('a', prefixNode.data)
  prefixNode = new PrefixNode()
  t.equal('', prefixNode.data)
  t.equal(0, prefixNode.children.length)
  t.end()
})

test('creating a empty Trie', function (t) {
  var trie = new Trie()
  t.equal(trie.root.data, '')
  t.end()
})

test('adding a word to the Trie', function (t) {
  var trie = new Trie()
  var word = 'type'
  trie.insert(word)
  t.equal(trie.root.children[0].children[0].children[0].children[0].data, 'e', 'Adding a Word with empty tree')
  word = 'ty'
  trie.insert(word)
  t.equal(trie.root.children.length, 1, 'Did not add the same letter when existed')
  t.end()
})
