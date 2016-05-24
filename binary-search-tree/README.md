# binary search tree
my implementation of a [binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree) with [javascript es6 classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## a bst tree
```
  constructor(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  }
```

## methods
### insert
if the value is less than the current tree's value, insert it on the left subtree.

if the value is greater than or equal to the current tree's value, insert it on the right subtree.

if that subtree is null, set the subtree to a new tree with the value.

bst insert maintains an average case runtime of O(logn) and a worstcase runtime of O(h).
```
insert(value) {
  if (value < this.value) (this.left) ? this.left.insert(value) : this.left = new Tree(value);
  else (this.right) ? this.right.insert(value) : this.right = new Tree(value);
}
```

### height
calculating the height of a bst has a runtime complexity of O(n) because all subtree heights must be calculated to determine the maximum.
```
height() {
  return Math.max((this.left) ? 1+this.left.height() : 0, (this.right) ? 1+this.right.height(): 0);
}
```
## traversals
### depth first traverse
a pre-order depth first traversal.

it achieves O(n) runtime complexity because each subtree is visited.
```
depthFirstTraverse(acc) {
  acc = acc || [];

  acc.push(this.value);
  if (this.left) this.left.depthFirstTraverse(acc);
  if (this.right) this.right.depthFirstTraverse(acc);

  return acc;
}
```
### breadth first traverse
a pre-order breadth first traversal.

like depth first traverse, it achieves O(n) runtime complexity because each subtree is visited.
```
breadthFirstTraverse(toVisit, acc) {
  toVisit = toVisit || [];
  acc = acc || [];

  acc.push(this.value);
  if (this.left) toVisit.push(this.left);
  if (this.right) toVisit.push(this.right);

  if (toVisit.length) return toVisit.shift().breadthFirstTraverse(toVisit, acc);
  return acc;
}
```
