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

  breadthFirstTraverseZigZag(toVisit, acc) {
    toVisit = toVisit || [];
    acc = acc || [];

    acc.push(this.val);
    this.children.forEach((c) => c.level = level+1);
    if (this.level%2 == 0) toVisit.concat(this.children);
    else toVisit.concat(this.children.reduce((acc, cur) => acc.unshift(cur)));

    if (toVisit.)
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
