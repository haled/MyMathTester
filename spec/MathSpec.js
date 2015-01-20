describe("Math", function() {

  it("should correctly checkAddition problems", function() {
    var result = checkAddition(1,2,5);
    expect(result).toBe("FAIL!");

    result = checkAddition(1,2,3);
    expect(result).toBe("Success!");
  });
});
