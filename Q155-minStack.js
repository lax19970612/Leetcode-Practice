
var MinStack = function() {
  this.stack = [];
  this.min = [];
  this.length = 0;
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.stack[this.length] = val;
  this.min[this.length] = this.length === 0 ? val : Math.min(this.min[this.length - 1], val);
  this.length++;
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.length--;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min[this.length - 1];
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/