var test = require('tape')
var QueueNode = require('./queue-node.js')
var Queue = require('./queue.js')

test('Creating Queue Node', function (t) {
  var queueNode = new QueueNode(10)
  t.equal(queueNode.data, 10)
  t.equal(queueNode.next, null)
  t.end()
})

test('Creating a Queue', function (t) {
  var queue = new Queue()
  t.equal(queue.head, null)
  t.equal(queue.tail, null)
  t.end()
})

test('Check if queue is empty', function (t) {
  var queue = new Queue()
  var empty = queue.isEmpty()
  t.equal(empty, true)
  var queueNode = new QueueNode('yes')
  queue = queue.enqueue(queueNode)
  empty = queue.isEmpty()
  t.equal(empty, false)
  t.end()
})

test('Check Head element', function (t) {
  var queue = new Queue()
  var head = queue.checkHead()
  t.equal(head, null)
  var queueNode = new QueueNode('time')
  queue = queue.enqueue(queueNode)
  head = queue.checkHead()
  t.equal(head, queue.head)
  t.end()
})

test('Add an item to Queue', function (t) {
  var queue = new Queue()
  // Add to empty queue
  var tailNode = new QueueNode('here')
  queue = queue.enqueue(tailNode)
  t.equal(queue.head, tailNode)
  for (var i = 0; i < 10; i++) {
    var headNode = new QueueNode(i)
    queue = queue.enqueue(headNode)
  }
  t.equal(queue.head, headNode)
  t.equal(queue.tail, tailNode)
  t.end()
})

test('Take an item off the queue', function (t) {
  var queue = new Queue()
  var dataDequeue = queue.dequeue()
  t.equal(dataDequeue, null)
  for (var i = 0; i < 10; i++) {
    var node = new QueueNode(i)
    queue = queue.enqueue(node)
  }
  var tailData = queue.tail.data
  dataDequeue = queue.dequeue()
  t.equal(dataDequeue, tailData)
  t.end()
})
