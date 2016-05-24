const expect = require('chai').expect;
const Tree = require('../tree');

describe('binary search tree testing', () => {

  var root;
  before(() => {
    root = new Tree(5);
    expect(root.height()).eql(0);
  });

  describe('chilren inserts', () => {
    it('insert node with value 3 to left child', () => {
      root.insert(3);
      expect(root.left.value).equal(3);
      expect(root.height()).eql(1);
    });

    it('insert node with value 7 to right child', () => {
      root.insert(7);
      expect(root.right.value).equal(7);
      expect(root.height()).eql(1);
    });
  });

  describe('grandchildren inserts', () => {
    it('insert node with value 6 to left child of right child', () => {
      root.insert(6);
      expect(root.right.left.value).equal(6);
      expect(root.height()).eql(2);
    });

    it('insert node with value 2 to left child of left child', () => {
      root.insert(2);
      expect(root.left.left.value).equal(2);
      expect(root.height()).eql(2);
    });
  });

  describe('depth first traverse', () => {

    var root;
    beforeEach(() => {
      root = new Tree(5);
      root.insert(3);
      root.insert(7);
      root.insert(6);
      root.insert(2);
    });

    it('depth first traverse', () => {
      expect(root.depthFirstTraverse()).eql([5, 3, 2, 7, 6]);
    });

  });

});
