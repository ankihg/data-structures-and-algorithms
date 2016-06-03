const expect = require('chai').expect;
const translator = require('../index')

describe('pig latin translator testing', () => {

  it('translate please respond', () => {
    expect(translator.piglatinify('please respond')).eql('easeplay espondray')
  })

  it('still terminates without vowels', () => {
    expect(translator.piglatinify('plz')).eql('plzay')
  })

})
