var test = require('tape')
var TreeNode = require('./tree-node.js')
var BinarySearchTree = require('./binary-search-tree.js')

test('Creating a TreeNode', function (t) {
  var nodeData = 'first node'
  var treeNode = new TreeNode(nodeData)
  t.equal(nodeData, treeNode.data)
  t.equal(treeNode.left, null)
  t.equal(treeNode.right, null)
  t.end()
})

test('Creating a BST', function (t) {
  var bst = new BinarySearchTree()
  t.equal(bst.root, null)
  t.end()
})

test('Searching for an Element in a BST', function (t) {
  var bst = new BinarySearchTree()
  var searchData = 7
  // Add to an empty tree
  var nodeOutput = bst.searchAdd(searchData)
  t.equal(nodeOutput, bst.root)
  // Add an Element to the left
  searchData = 3
  nodeOutput = bst.searchAdd(searchData)
  t.equal(bst.root.left, nodeOutput)
  // Add an Element to the right
  searchData = 10
  nodeOutput = bst.searchAdd(searchData)
  t.equal(bst.root.right, nodeOutput)
  // Search for an element that is in the tree
  searchData = 3
  nodeOutput = bst.searchAdd(searchData)
  t.equal(nodeOutput.data, searchData)
  t.end()
})

