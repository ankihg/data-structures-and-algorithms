const chai = require('chai');
const expect = chai.expect;
const makeChange = require('../makeChange');
const makeChangeMemo = require('../makeChangeMemo')

describe('make change testing', () => {

  it('make change primitively', () => {
    expect(makeChange(6)).eql([5, 1]);
    expect(makeChange(11)).eql([10, 1]);
    expect(makeChange(24)).eql([10, 10, 1, 1, 1, 1]);
    expect(makeChange(26)).eql([25, 1]);
  });

  it('make change with memoization', () => {
    expect(makeChangeMemo(6)).eql([5, 1]);
    expect(makeChangeMemo(11)).eql([10, 1]);
    expect(makeChangeMemo(24)).eql([10, 10, 1, 1, 1, 1]);
    expect(makeChangeMemo(26)).eql([25, 1]);
  });

});
