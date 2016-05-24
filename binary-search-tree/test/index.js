const expect = require('chai').expect;
const Node = require('../node');

describe('binary search tree testing', () => {

  var root;
  before(() => {
    root = new Node(5);
  });

  it('insert node with value 7 to right child', () => {
    root.insert(7);
    expect(root.left).equal(null);
    expect(root.right.value).equal(7);
  });

  it('insert node with value 6 to left child of right child', () => {
    root.insert(6);
    expect(root.left).equal(null);
    expect(root.right.left.value).equal(6);
  });

})
