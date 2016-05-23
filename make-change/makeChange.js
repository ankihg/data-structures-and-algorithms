const coins = [1, 5, 10, 25];

var makeChange = module.exports = function(amount, usedCoins) {
  usedCoins = usedCoins || [];

  if (amount <= 0) return usedCoins;

  var min = {
    coin: null,
    coins: null
  }

  for (var i=0; i<coins.length; i++) {
    var coin = coins[i];

    if (amount - coin >= 0) {
      var res = makeChange(amount-coin, [coin].concat(usedCoins));
      if (!min.coins || res.length < min.coins.length) {
        min = {
          coin: coin,
          coins: res
        }
      }
    }
  }

  return min.coins;
}
