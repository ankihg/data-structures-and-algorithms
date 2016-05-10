'use strict';
const node = class {

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

};

var list = new node(1);
console.log(list);
list.append(3);
console.log(list);
list.insert(2, 0);
console.log(list);
