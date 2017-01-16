var TreeNode = require('./tree-node.js')

var BinarySearchTree = function () {
  this.root = null
}

// Looks for a node given a value
// If node is not in the tree then add its to its spot
BinarySearchTree.prototype.searchAdd = function (value) {
  var current = this.root
  var treeNode

  if (this.root === null) {
    treeNode = new TreeNode(value)
    this.root = treeNode
    return this.root
  } else {
    while (current !== null) {
      if (value < current.data) {
        // move to the left subtree
        if (!current.left) {
          treeNode = new TreeNode(value)
          current.left = treeNode
          return current.left
        }
        current = current.left
      } else if (value > current.data) {
        // move to the right subtree
        if (!current.right) {
          treeNode = new TreeNode(value)
          current.right = treeNode
          return current.right
        }
        current = current.right
      } else {
        return current
      }
    }
  }
}

// Print Preorder Traversal of the Tree
// Visit the Root
// Then Visit the left subtree
// Then Visit the right subtree
BinarySearchTree.prototype.preorder = function (root) {
  if (root) {
    console.log(root.data)
    this.preorder(root.left)
    this.preorder(root.right)
  }
  return
}

// Print Inorder Traversal of the Tree
// Traverse the left subtree inorder
// Then Visit the root
// Then traverse the right subtree inorder
BinarySearchTree.prototype.inorder = function (root) {
  if (root) {
    this.inorder(root.left)
    console.log(root.data)
    this.inorder(root.right)
  }
  return
}

// Print Postorder Traversal of the Tree
// Traverse the left subtree postorder
// Then traverse the right subtree postorder
// Then Visit the root
BinarySearchTree.prototype.postorder = function (root) {
  if (root) {
    this.postorder(root.left)
    this.postorder(root.right)
    console.log(root.data)
  }
  return
}

module.exports = BinarySearchTree
