class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(string) {
    var lgestNum = 0;
    // Find key with largest number
    for (var key in this.storage) {
      if (key > lgestNum) {
        lgestNum = key;
      }
    }
    // Add key (largest number + 1) with value (string)
    this.storage[lgestNum + 1] = string;
  }

  dequeued() {
    var smestNum;
    // Find key with smallest number
    for (var key in this.object) {
      if (smestNum === undefined || smestNum > key){
        smestNum = key;
      }
    }
    // Store key
    var dequeued = this.storage[smestNum];
    // Delete key
    delete this.storage[smestNum];
    // Return key
    return dequeued;
  }

  size() {
    var count = 0;
    // For each key in storage, add to count
    for (var key in this.storage) {
      count++;
    }
    return count;
  }
}
