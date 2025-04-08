
var RandomizedSet = function() {
  this.set = {};
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (this.set[val] === undefined) {
      this.set[val] = val;
      return true;
  }

  return false;
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if (this.set[val] !== undefined) {
      delete this.set[val];
      return true;
  }

  return false;
};

/**
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  const keys = Object.keys(this.set);
  const randomIndex = Math.floor(Math.random() * keys.length);

  return this.set[keys[randomIndex]];
};

/** 
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/