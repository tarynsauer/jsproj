var CoinChanger = function () {
};

CoinChanger.prototype.makeChange = function(amount) {

  change = new Array();
  coins = [25, 10, 5, 1]

  for (i = 0; i < coins.length; i++) {
    coin = coins[i];
    while (amount >= coin) {
      change.push(coin);
      amount -= coin;
    }
    amount
  }

  return change;
};
