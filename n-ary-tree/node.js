'use strict'
const node = module.exports = class {

  constructor(val, children) {
    this.val = val;
    this.children = children || [];
  }

  breadthFirstTraverse(toVisit, acc) {
    toVisit  = toVisit || [];
    acc = acc || [];
    acc.push(this.val);
    toVisit = toVisit.concat(this.children);
    if (toVisit.length) toVisit.shift().breadthFirstTraverse(toVisit, acc);
    return acc;
  }

}


//   const tree = new node('A1',
//     [new node('B1',
//       [new node('C1', [
//         new node('D1')
//       ]),
//       new node('C2'),
//       new node('C3')
//       ]),
//     new node('B2', [
//       new node('C4'),
//       new node('C5')
//     ])]);
//
// console.log(tree.breadthFirstTraverse());
