const expect = require('chai').expect;
const node = require('../node')

describe('n-ary tree testing', () => {

  const tree = new node(1,
    [new node(2,
      [new node(4, [
        new node(6)
      ]),
      new node(5)]),
    new node(3)]);

  const tree2 = new node('A1',
    [new node('B1',
      [new node('C1', [
        new node('D1')
      ]),
      new node('C2'),
      new node('C3')
      ]),
    new node('B2', [
      new node('C4'),
      new node('C5', [
        new node('D2')
      ])
    ])]);

  it('breadthFirstTraverse tree1', () => {
    expect(tree.breadthFirstTraverse()).eql([1, 2, 3, 4, 5, 6]);
  })

  it('breadthFirstTraverse tree2', () => {
    expect(tree2.breadthFirstTraverse()).eql(['A1', 'B1', 'B2', 'C1', 'C2', 'C3', 'C4', 'C5', 'D1', 'D2']);
  })

})
