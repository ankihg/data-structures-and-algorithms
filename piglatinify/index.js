const vowels = ['a', 'e', 'i', 'o', 'u'];

exports.piglatinify = function(phrase) {
  return phrase.split(' ').reduce((translation, word) => {
    return translation.concat(translate(word), ' ');
  }, '').trim();
}

function translate(word) {
  var suffix = '';
  while (word.length && vowels.indexOf(word.charAt(0)) < 0) {
    suffix = suffix + word.slice(0, 1);
    word = word.substr(1);
  }
  return word + suffix + 'ay';
}
