const chai = require('chai');
const expect = chai.expect;
const makeChange = require('../makeChange.js');

describe('make change testing', () => {

  it('make change', () => {
    expect(makeChange(6)).eql([5, 1]);
    expect(makeChange(11)).eql([10, 1]);
    expect(makeChange(24)).eql([10, 10, 1, 1, 1, 1]);
    expect(makeChange(26)).eql([25, 1]);
  });

});
