const coins = [1, 5, 10, 25];

var makeChange = module.exports = function(amount, usedCoins, memo) {
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
