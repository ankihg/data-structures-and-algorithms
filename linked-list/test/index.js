const chai = require('chai');
const expect = chai.expect;
const Node = require('../node.js');

describe('linked list testing', () => {

  var head;

  before(() => {
      head = new Node(null);
  })

  it('append an element with val "p" and have length 1', () => {
    head.append('p');
    expect(head.length()).eql(1);
  });

  it('append an element with val "z" and last element has value "z"', () => {
    head.append('z');

    var lastElement = head;
    while (lastElement.next) lastElement = lastElement.next;
    expect(lastElement.value).eql('z');
  });

  it('insert an element with val "l" at index 1 between "p" and "z"', () => {
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

  it('replace value of element 3 with "r"', () => {
    head.replace(3, 'r');

    var str = '';
    var node = head.next;
    while (node) {
      str += node.value;
      node = node.next;
    }

    expect(str).eql('plr');
    expect(head.length()).eql(3);
  });

  describe('reverse a linked list', () => {

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
