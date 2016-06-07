const mergesort = module.exports = (arr) => {

  if (arr.length <= 1) return arr;

  var left = arr.slice(0, Math.floor(arr.length/2));
  var right = arr.slice(Math.floor(arr.length/2), arr.length);

  left = mergesort(left);
  right = mergesort(right);

  return merge(left, right);
}

function merge(left, right, acc) {
  acc = acc || [];

  if (left.length && right.length)
    (left[0] < right[0]) ? acc.push(left.shift()) : acc.push(right.shift());
  else if (left.length) acc.push(left.shift());
  else if (right.length) acc.push(right.shift());

  if (left.length || right.length) return merge(left, right, acc);
  return acc;
}
