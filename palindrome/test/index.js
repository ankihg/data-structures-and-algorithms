const expect = require('chai').expect;
const palindrome = require('../index')

describe('palindrome testing', () => {

  describe('recuseive palindrome testing', () => {

    it('pass with odd letter count', () => {
      expect(palindrome.isPalindromeR('wow')).eql(true);
    })

    it('pass with even letter count', () => {
      expect(palindrome.isPalindromeR('woow')).eql(true);
    })

    it('pass with mismatched spacing', () => {
      expect(palindrome.isPalindromeR('a man a plan a canal panama')).eql(true);
    })

    it('fail with odd letter count', () => {
      expect(palindrome.isPalindromeR('pow')).eql(false);
    })

    it('fail with even letter count', () => {
      expect(palindrome.isPalindromeR('woop')).eql(false);
    })

  })

  describe('iterative palindrome testing', () => {

    it('pass with odd letter count', () => {
      expect(palindrome.isPalindromeI('wow')).eql(true);
    })

    it('pass with even letter count', () => {
      expect(palindrome.isPalindromeI('woow')).eql(true);
    })

    it('pass with mismatched spacing', () => {
      expect(palindrome.isPalindromeI('a man a plan a canal panama')).eql(true);
    })

    it('fail with odd letter count', () => {
      expect(palindrome.isPalindromeI('pow')).eql(false);
    })

    it('fail with even letter count', () => {
      expect(palindrome.isPalindromeI('woop')).eql(false);
    })

  })

})
