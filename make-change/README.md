# make change
my implementations of the common make change algorithm, first without and then with memoization


let's define our coins
```
const coins = [1, 5, 10, 25];
```

## first, a primitive non-greedy approach
```
function makeChange(amount, usedCoins) {
  usedCoins = usedCoins || [];

  if (amount <= 0) return usedCoins;

  var minCoins;
  for (var i=0; i<coins.length; i++) {
    var coin = coins[i];

    if (amount - coin >= 0) {
      var res = makeChange(amount-coin, [coin].concat(usedCoins));

      if (!minCoins || res.length < minCoins.length) minCoins = res;
    }
  }

  return minCoins;
}
```

## now with memoization
since the make change problem has optimal substructure and overlapping subproblems we can utilized dynamic programming to eliminate repetitive calculations
```
function makeChangeMemo(amount, usedCoins, memo) {
  memo = memo || {};
  usedCoins = usedCoins || [];

  if (amount <= 0) return usedCoins;

  var minCoins;
  for (var i=0; i<coins.length; i++) {
    var coin = coins[i];
    memo[amount] = memo[amount] || {};

    if (amount - coin >= 0) {
      memo[amount][coin] = memo[amount][coin] || makeChange(amount-coin, [coin].concat(usedCoins));

      if (!minCoins || memo[amount][coin].length < minCoins.length) minCoins = memo[amount][coin];
    }
  }

  return minCoins;
}
```
