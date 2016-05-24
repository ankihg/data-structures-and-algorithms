# binary search tree
my implementation of a [binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree) with [javascript es6 classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## tree
```
  constructor(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  }
```

## methods
### insert
```
insert(value) {
  if (value < this.value) (this.left) ? this.left.insert(value) : this.left = new Tree(value);
  else (this.right) ? this.right.insert(value) : this.right = new Tree(value);
}
```

### height
```
height() {
  return Math.max((this.left) ? 1+this.left.height() : 0, (this.right) ? 1+this.right.height(): 0);
}
```

### depth first traverse
```
depthFirstTraverse(acc) {
  acc = acc || [];

  acc.push(this.value);
  if (this.left) this.left.depthFirstTraverse(acc);
  if (this.right) this.right.depthFirstTraverse(acc);

  return acc;
}
```
