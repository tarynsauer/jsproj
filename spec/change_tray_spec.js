describe("ChangeTray", function() {

  beforeEach(function() {
    tray = new ChangeTray();
  });

  it("returns an integer", function() {
    expect(tray.parseInput("3")).toEqual(3);
  });

  it("gets the user's amount input", function() {
    setFixtures('<input value="22" data-id="amount"/>')
    expect(tray.getAmount()).toEqual("22");
  });

  it("converts the user's input and appends to the tray", function() {
    setFixtures('<input data-id="changeTray"/>')
    tray.showChange(3);
    expect($("[data-id=changeTray]")).toEqual([1,1,1]);
  });

});
