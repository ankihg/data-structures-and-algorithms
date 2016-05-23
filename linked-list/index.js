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

  length(i) {
    i = i || 0;
    if (this.next) return this.next.length(++i);
    return i;
  }

  replace(index, value, i) {
    i = i || 0;
    if (index == i) return this.value = value;
    if (this.next) return this.next.replace(index, value, ++i);
  }

};

function test() {
  var list = new node(null);
  console.log(list);
  list.append(1);
  list.append(3);
  console.log(list);
  // list.insert(2, 0);
  console.log(list);
  console.log(list.head());
  list.replace(0, 5);
  console.log(list);
}
// test();
