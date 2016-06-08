'use strict';
module.exports = (arr) => {

  let partition = 1;

  while (partition < arr.length) {
    let cur = partition;
    while (cur > 0 && arr[cur] < arr[cur-1]) swap(arr, cur, --cur);
    partition++;
  }

  return arr;
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
