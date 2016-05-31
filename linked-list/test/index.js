const chai = require('chai');
const expect = chai.expect;
const Node = require('../node.js');

describe('linked list testing', () => {

  describe('append testing', () => {
    var head;

    before(() => {
        head = new Node(null);
    });

    it('element with val "p" and have length 1', () => {
      head.append('p');
      expect(head.length()).eql(1);
    });

    it('element with val "z" and last element has value "z"', () => {
      head.append('z');

      var lastElement = head;
      while (lastElement.next) lastElement = lastElement.next;
      expect(lastElement.value).eql('z');
    });

  });

  describe('insertion testing', () => {

    var head;
    beforeEach(() => {
        head = new Node(null);
        head.append('p');
        head.append('z');
    });

    it('element with val "l" at index 1 between "p" and "z"', () => {
      head.insert('l', 1);

      var str = '';
      var node = head.next;
      while (node) {
        str += node.value;
        node = node.next;
      }

      expect(str).eql('plz');
      expect(head.length()).eql(3);
    });

    it('element with val "r" at index 5, exceeds length, should append', () => {
      head.insert('r', 5);
      var str = '';
      var node = head.next;
      while (node) {
        str += node.value;
        node = node.next;
      }
      expect(str).eql('pzr');
      expect(head.length()).eql(3);
    })
  });

  describe('replacement testing', () => {

    var head;
    beforeEach(() => {
        head = new Node(null);
        head.append('p');
        head.append('l');
        head.append('z');
        head.append('s');
    });


    it('index 4 with "r"', () => {
      head.replace(4, 'r');

      var str = '';
      var node = head.next;
      while (node) {
        str += node.value;
        node = node.next;
      }

      expect(str).eql('plzr');
      expect(head.length()).eql(4);
    });
  });

  describe('reversal testing', () => {

    var head;
    beforeEach(() => {
      head = new Node(null);
      head.append('p');
      head.append('l');
      head.append('z');
    })

    it('reverse a linked list', () => {
      var reversed = head.reverse();
      expect(reversed.value).eql(null);
      expect(reversed.next.value).eql('z');
    });
  })


});
