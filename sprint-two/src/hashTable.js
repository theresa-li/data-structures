var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check if bucket is there
  var bucket = this._storage.get(index);

  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }
  // if the value is there - update, otherwise - modify
  var found = false;
  for (i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      found = true;
      break;
    }
  } if (!found) {
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
   if (!bucket) {
   return null;
  }
  var found = false;
  for (i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1]
    }
  } if (!found) {
   return undefined;
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
   var bucket = this._storage.get(index);
   if (!bucket) {
   return undefined;
  }
  var found = false;
  for (i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      break;
    }
  } if (!found) {
   return undefined;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


