const chai = require('chai');
const expect = chai.expect;
const node = require('../linked-list');

describe('linked list testing', () => {

  var head;

  before(() => {
      head = new node(null);
  })

  it('append an element with val "p"', () => {
    head.append('p');

    var lastElement = head;
    while (lastElement.next) lastElement = lastElement.next;
    expect(lastElement.value).eql('p');
  });

});
