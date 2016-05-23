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

## methods
### append
appends an element to the linked list with the specified value

```
append(value) {
  if (!this.next) return this.next = new node(value);
  return this.next.append(value);
}
```
while there is a next value, keep going through the list

if a node without a next value is reached, set it's next value to be a new node with the specified value
