var test = require('tape')
var BinaryHeap = require('./binary-heap.js')

test('Creating an Empty BinaryHeap', function (t) {
  var binHeap = new BinaryHeap('min')
  t.equal(binHeap.contents.length, 1)
  t.equal(binHeap.type, 'min')
  t.end()
})

test('Inserting into a BinaryHeap', function (t) {
  var binHeap = new BinaryHeap('min')
  var index
  // Place into an empty array
  index = binHeap.insert(7)
  t.equal(7, binHeap.contents[index.num])
  // Place into an array with items already
  index = binHeap.insert(10)
  index = binHeap.insert(15)
  index = binHeap.insert(5)
  t.equal(5, binHeap.contents[index.num])
  t.equal(5, binHeap.contents[1])
  // Create a Max-Heap
  var binaryHeap = new BinaryHeap('max')
  index = binaryHeap.insert(7)
  t.equal(7, binaryHeap.contents[index.num])
  index = binaryHeap.insert(10)
  index = binaryHeap.insert(15)
  index = binaryHeap.insert(5)
  t.equal(5, binaryHeap.contents[index.num])
  t.equal(15, binaryHeap.contents[1])
  t.end()
})

test('Deleting MinMax Value', function (t) {
  var binHeap = new BinaryHeap('min')
  var index
  index = binHeap.insert(10)
  index = binHeap.insert(15)
  index = binHeap.insert(5)
  index = binHeap.deleteMinMax()
  t.equal(binHeap.contents[1], 10)

  var binaryHeap = new BinaryHeap('max')
  index = binaryHeap.insert(10)
  // console.log(binaryHeap)
  index = binaryHeap.insert(15)
  // console.log(binaryHeap)
  index = binaryHeap.insert(5)
  // console.log(binaryHeap)
  index = binaryHeap.deleteMinMax()
  // console.log(binaryHeap)
  t.equal(binaryHeap.contents[1], 10)
  t.end()
})
