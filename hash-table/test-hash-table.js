// test-hash-table.js
var test = require('tape')
var HashTable = require('./hash-table.js')

test('creating a HashTable', function (t) {
  // check that array was made
  var hashtable = new HashTable()
  console.log(hashtable.storage[3])
  t.equal(hashtable.storage.length, 0)
  t.end()
})

test('adding an item to HashTable', function (t) {
  var hashtable = new HashTable()
  var key = 15
  var value
  value = hashtable.insert(key, true)
  // no collision situation
  t.equal(value, key)
  // collision situation
  key = 25
  value = hashtable.insert(key, true)
  t.equal(value, key)
  t.end()
})

test('removing an item from HashTable', function (t) {
  var hashtable = new HashTable()
  var key = 8
  var value = hashtable.insert(key, true)

  value = hashtable.remove(key, false)
  t.equal(value, 0)
  key = 10
  value = hashtable.remove(key, false)
  t.equal(value, 'This slot is not being used: cannot remove')
  t.end()
})
