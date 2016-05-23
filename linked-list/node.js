'use strict';
const node = module.exports = class {

  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }

  append(value) {
    if (!this.next) return this.next = new node(value);
    return this.next.append(value);
  }

  insert(value, index, i) {
    i = i || 0;
    // will append, if index > length
    if (index == i || !this.next) return this.next = new node(value, this.next);
    return this.next.insert(value, index, ++i);
  }

  replace(index, value, i) {
    i = i || 0;
    if (index == i) return this.value = value;
    if (this.next) return this.next.replace(index, value, ++i);
  }

  length(i) {
    i = i || 0;
    if (this.next) return this.next.length(++i);
    return i;
  }

};
