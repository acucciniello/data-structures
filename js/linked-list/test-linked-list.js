// test-Linked-List.js

var LinkedList = require('./linked-list.js')
var Node = require('./node.js')

var linkedList = new LinkedList()
var node = new Node(5)
linkedList.push('hey')
linkedList.push('I')
linkedList.push('Love')
linkedList.push("Drake's")
linkedList.push('Music')
linkedList.remove(2)

// test constructors:
console.log(linkedList.head.next.next.next)
console.log(node.data)
console.log(node.next)

