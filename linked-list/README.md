# linked list
my recursive implementation of the classic data structure [linked list](https://en.wikipedia.org/wiki/Linked_list) using [JavaScript ES6 classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)</a>


## data structure
linked list maintains access to a list of elements by only holding a pointer to the first element(or node) of the list

each node holds its own value and a pointer to the next element in this list or null if there is no next element
```
constructor(value, next) {
  this.value = value;
  this.next = next || null;
}
```

through this structure, each element in the list is accessible

## core methods
### append
appends an element to the linked list with the specified value

```
append(value) {
  if (!this.next) return this.next = new node(value);
  return this.next.append(value);
}
```
while there is a next value, keep going through the list

if a node without a next value is reached, set its next value to be a new node with the specified value

this algorithm has a runtime complexity of O(n) because each node in the list is visited

### insert
inserts an element into the linked list at the specified index with the specified value

```
insert(value, index, i) {
  i = i || 0;
  // will append, if index > length
  if (index == i || !this.next) return this.next = new node(value, this.next);
  return this.next.insert(value, index, ++i);
}
```

while index has not been reached and there is a next element, keep moving through the list

when index or end of list has been reached, set the next node to a new node with the specified value and set the new node's next element to the current node's next element

this maintains a runtime complexity of O(index) with a worst case of O(n), if the index exceeds the length

### replace
replace the value at the specified index with the specified value

```
replace(index, value, i) {
  i = i || 0;
  if (index == i) return this.value = value;
  if (this.next) return this.next.replace(index, value, ++i);
}
```
keep moving through the list while the index hasn't been reached and there is a next element

if the index is reached, replace the node's value with the specified value

if the end of the list is reached before the index, no value is replaced and the function returns undefined

this maintains a runtime complexity of O(index) with a worst case of O(n), if the index exceeds the length

### length
calculate the length of the linked list
```
length(i) {
  i = i || 0;
  if (this.next) return this.next.length(++i);
  return i;
}
```
while there is a next element, keep moving through the list incrementing i

when there is no next element, return i

calculating the length of a linked list takes O(n) because each element must be visited

## bonus methods
### reverse
reverse the elements of a linked list

```
reverse(prev) {
  prev = prev || null;
  if (!this.value && this.next) return this.next.reverse(null);

  let next = this.next;
  this.next = prev;

  if (next) return next.reverse(this);

  let head = new node(null);
  head.next = this;
  return head;
}
```
the algorithm moves through the linked list, setting each node's next element to the node before it.

this has a runtime of O(n) because each node must be visited
