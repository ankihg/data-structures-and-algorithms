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

  insert(value, index) {

  }

};

var list = new node(1);
console.log(list);
list.append(3);
console.log(list);
list.append(5);
console.log(list);
