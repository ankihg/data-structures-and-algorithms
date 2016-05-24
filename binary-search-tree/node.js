'use strict';
const Node = module.exports = class {

  constructor(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  }

  insert(value) {
    if (value < this.value) (this.left) ? this.left.insert(value) : this.left = new Node(value);
    else (this.right) ? this.right.insert(value) : this.right = new Node(value);
  }

}
