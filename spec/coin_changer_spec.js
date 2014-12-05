describe("CoinChanger", function() {

  beforeEach(function() {
    changer = new CoinChanger();
  });

  it("returns one penny", function() {
    expect(changer.makeChange(1)).toEqual([1]);
  });

  it("returns two pennies", function(){
   expect(changer.makeChange(2)).toEqual([1, 1]);
  });

  it("returns one penny and a nickel", function(){
    expect(changer.makeChange(6)).toEqual([5, 1]);
  });

  it("returns two pennies and a nickel", function() {
    expect(changer.makeChange(7)).toEqual([5, 1, 1]);
  });

  it("returns one dime and three pennies", function() {
    expect(changer.makeChange(13)).toEqual([10, 1, 1, 1]);
  });

  it("returns three quarters, one dimes, one nickel, and three pennies", function() {
    expect(changer.makeChange(93)).toEqual([25, 25, 25, 10, 5, 1, 1, 1]);
  });

});
