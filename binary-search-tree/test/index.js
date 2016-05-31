const expect = require('chai').expect;
const Tree = require('../tree');

describe('binary search tree testing', () => {

  describe('chilren inserts', () => {

    var root;
    before(() => {
      root = new Tree(5);
      expect(root.height()).eql(0);
    });

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

    var root;
    before(() => {
      root = new Tree(5);
      expect(root.height()).eql(0);
      root.insert(3);
      root.insert(7);
      expect(root.height()).eql(1);
    });

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

  describe('traversal testing', () => {

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

    it('breadth first traverse', () => {
      expect(root.breadthFirstTraverse()).eql([5, 3, 7, 2, 6]);
    });

  });

  describe('search testing', () => {
    var root;
    beforeEach(() => {
      root = new Tree(5);
      root.insert(3);
      root.insert(7);
      root.insert(6);
      root.insert(2);
    });

    it('for 3', () => {
      expect(root.search(3)).eql(3);
    });

    it('for 6', () => {
      expect(root.search(6)).eql(6);
    });

    it('for 11, does not exist', () => {
      expect(root.search(11)).eql(false);
    });

  });

});
