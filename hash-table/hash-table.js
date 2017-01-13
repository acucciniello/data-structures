// hash-table.js

var HashTable = function () {
  this.storage = []
}

HashTable.prototype.insert = function (key) {
  var index = this.hashFunction(key)
  this.storage[index] = key
  return this.storage[index]
}

HashTable.prototype.hashFunction = function (key, isInsert) {
  // takes the key, calculates the location and returns the location it should store that in
  var index = key % 10 + 1
  if (!isInsert) {
    return index
  }
  // undefined determines that there is nothing that exists there
  while (this.storage[index] !== undefined) {
    index++
  }
  console.log('We hashed too ' + index)
  return index
}

HashTable.prototype.remove = function (key) {
  var index = this.hashFunction(key)
  if (this) {
    if (this.storage[index] === undefined) {
      return 'This slot is not being used: cannot remove'
    } else {
      this.storage[index] = 0
      return this.storage[index]
    }
  }
}

module.exports = HashTable

