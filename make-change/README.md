# make change
some implementations of the common make change algorithm. i first solve the problem with a primitive non-greedy approach then incorporate memoization to reduce runtime.

## setup
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
since the make change problem has both

&nbsp;&nbsp;&nbsp;&nbsp; **overlappping subproblems** - solution to a given subproblem may be used multiple times

&nbsp;&nbsp;&nbsp;&nbsp; **optimal substructure** - solution is formed from solutions of its subproblems

dynamic programming can be utilized to eliminate repetitive calculations.

as the algorithm recurses through subproblems, it may be calculating the same problem multiple times. to minimize calculations, we can cache the solutions to these subproblems and use the cached value as opposed to recalculating the solution. this technique is called **memoization**.

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
