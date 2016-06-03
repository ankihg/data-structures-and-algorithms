const isPalindromeR = exports.isPalindromeR = function(str, chars) {
  chars = chars || str.replace(/\s/g, '').split('');

  if (chars.length <= 1) return true;
  if (chars[0] !== chars[chars.length-1]) return false;

  chars.shift(); chars.pop();
  return isPalindromeR(null, chars);
}


exports.isPalindromeI = function(str, chars) {
  chars = chars || str.replace(/\s/g, '').split('');

  while (chars.length > 1) {
    if (chars[0] !== chars[chars.length-1]) return false;
    chars.shift(); chars.pop();
  }
  return true;
}
