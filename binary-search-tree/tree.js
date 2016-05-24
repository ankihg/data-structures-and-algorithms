'use strict';
const Tree = module.exports = class {

  constructor(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  }

  insert(value) {
    if (value < this.value) (this.left) ? this.left.insert(value) : this.left = new Tree(value);
    else (this.right) ? this.right.insert(value) : this.right = new Tree(value);
  }

  height() {
    return Math.max((this.left) ? 1+this.left.height() : 0, (this.right) ? 1+this.right.height(): 0);
  }

  depthFirstTraverse(acc) {
    acc = acc || [];

    acc.push(this.value);
    if (this.left) this.left.depthFirstTraverse(acc);
    if (this.right) this.right.depthFirstTraverse(acc);

    return acc;
  }

}
