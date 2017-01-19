
var BinaryHeap = function (type) {
  this.contents = [0]
  this.type = type
}

BinaryHeap.prototype.insert = function (value) {
  this.contents.push(value)
  var done = false
  var index = {
    num: this.contents.length - 1
  }
  while (!done) {
    done = percolateUp(this, index, done)
  }
  return index
}

function percolateUp (binHeap, index, done) {
  if (binHeap.type === 'min') {
    if (binHeap.contents[index.num] <= binHeap.contents[Math.floor(index.num / 2)] && Math.floor(index.num / 2) !== 0) {
      var temp = binHeap.contents[Math.floor(index.num / 2)]
      binHeap.contents[Math.floor(index.num / 2)] = binHeap.contents[index.num]
      binHeap.contents[index.num] = temp
      index.num = Math.floor(index.num / 2)
      return
    } else {
      done = true
      return done
    }
  } else if (binHeap.type === 'max') {
    if (binHeap.contents[index.num] >= binHeap.contents[Math.floor(index.num / 2)] && Math.floor(index.num / 2) !== 0) {
      temp = binHeap.contents[Math.floor(index.num / 2)]
      binHeap.contents[Math.floor(index.num / 2)] = binHeap.contents[index.num]
      binHeap.contents[index.num] = temp
      index.num = Math.floor(index.num / 2)
      return
    } else {
      done = true
      return done
    }
  } else {
    return 'Type is wrong only accept min/max'
  }
}

BinaryHeap.prototype.deleteMinMax = function () {
  this.contents[1] = this.contents[this.contents.length - 1]
  this.contents.pop()
  var done = false
  var index = {
    num: 1
  }
  while (!done) {
    done = percolateDown(this, index, done)
    console.log(this)
  }
  return index
}

function percolateDown (binHeap, index, done) {
  if (binHeap.type === 'min') {
    if (binHeap.contents[index.num] >= binHeap.contents[index.num * 2] || binHeap.contents[index.num] >= binHeap.contents[index.num * 2 + 1]) {
      if (binHeap.contents[index.num * 2] <= binHeap.contents[index.num * 2 + 1]) {
        var temp = binHeap.contents[index.num * 2]
        binHeap.contents[index.num * 2] = binHeap.contents[index.num]
        binHeap.contents[index.num] = temp
        index.num = index.num * 2
        console.log(index.num)
        return
      } else {
        temp = binHeap.contents[index.num * 2 + 1]
        binHeap.contents[index.num * 2 + 1] = binHeap.contents[index.num]
        binHeap.contents[index.num] = temp
        index.num = index.num * 2 + 1
        console.log(index.num)
        return
      }
    } else {
      done = true
      return done
    }
  } else if (binHeap.type === 'max') {
    if (binHeap.contents[index.num] <= binHeap.contents[index.num * 2] || binHeap.contents[index.num] <= binHeap.contents[index.num * 2 + 1]) {
      if (binHeap.contents[index.num * 2] >= binHeap.contents[index.num * 2 + 1] || binHeap.contents[index.num * 2 + 1] === undefined) {
        temp = binHeap.contents[index.num * 2]
        binHeap.contents[index.num * 2] = binHeap.contents[index.num]
        binHeap.contents[index.num] = temp
        index.num = index.num * 2
        return
      } else {
        temp = binHeap.contents[index.num * 2 + 1]
        binHeap.contents[index.num * 2 + 1] = binHeap.contents[index.num]
        binHeap.contents[index.num] = temp
        index.num = index.num * 2 + 1
        return
      }
    } else {
      done = true
      return done
    }
  } else {
    return 'Type is wrong only accept min/max'
  }
}

module.exports = BinaryHeap
