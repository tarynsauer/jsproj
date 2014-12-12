var ChangeTray = function () {
};

ChangeTray.prototype.parseInput = function(input) {
  return parseInt(input);
}

ChangeTray.prototype.getAmount = function() {
  return $("[data-id=amount]").val();
}
