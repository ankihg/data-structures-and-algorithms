const expect = require('chai').expect
const mergesort = require('../mergesort')

describe('sorting algorithms testing', () => {

  describe('mergesort testing', () => {

    it('arr with even length', () => {
      expect(mergesort([4, 1, 5, 2, 6, 3])).eql([1, 2, 3, 4, 5, 6]);
    })

    it('arr with odd length', () => {
      expect(mergesort([4, 1, 5, 2, 3])).eql([1, 2, 3, 4, 5]);
    })

    it('empty arr', () => {
      expect(mergesort([])).eql([]);
    })

    it('arr with length 1', () => {
      expect(mergesort([5])).eql([5]);
    })

  })


})
