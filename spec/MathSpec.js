describe("Math", function() {

  describe("Addition", function() {
    it("should return a failure message if the answer is incorrect", function() {
      var result = checkAddition(1,2,5);
      expect(result).toBe("FAIL!");
    });
  
    it("should return a success message if the answer is correct", function() {
      var result = checkAddition(1,2,3);
      expect(result).toBe("Success!");
    });
  });

  describe("Subtraction", function() {
    it("should return a failure message if the answer is incorrect", function() {
      var result = checkSubtraction(5,2,2);
      expect(result).toBe("FAIL!");
    });
  
    it("should return a success message if the answer is correct", function() {
      var result = checkSubtraction(5,2,3);
      expect(result).toBe("Success!");
    });
  });

  describe("Multiplication", function() {
    it("should return a failure message if the answer is incorrect", function() {
      var result = checkMultiplication(5,2,5);
      expect(result).toBe("FAIL!");
    });
  
    it("should return a success message if the answer is correct", function() {
      var result = checkMultiplication(5,2,10);
      expect(result).toBe("Success!");
    });
  });

  describe("Division", function() {
    it("should return a failure message if the answer is incorrect", function() {
      var result = checkDivision(10,5,3);
      expect(result).toBe("FAIL!");
    });
  
    it("should return a success message if the answer is correct", function() {
      var result = checkDivision(10,5,2);
      expect(result).toBe("Success!");
    });
  });

  describe("Random Number Generator", function() {
    it("should generate a number less than or equal to 10", function() {
      var number = getRandomSingleDigitNumber();
      expect(number).toBeLessThan(11);
    });

    it("should generate a number greater than or equal to 0", function() {
      var number = getRandomSingleDigitNumber();
      expect(number).toBeGreaterThan(-1);
    });
  });

  describe("Create Operands", function() {
    it("should return two random numbers and a + sign for Addition", function() {
      var problem = setOperands('Addition');
      expect(problem.operand1).toBeLessThan(11);
      expect(problem.operand1).toBeGreaterThan(-1);
      expect(problem.operand2).toBeLessThan(11);
      expect(problem.operand2).toBeGreaterThan(-1);
      expect(problem.operator).toEqual('+');
    });

    it("should return two random numbers and a X sign for Multiplication", function() {
      var problem = setOperands('Multiplication');
      expect(problem.operand1).toBeLessThan(11);
      expect(problem.operand1).toBeGreaterThan(-1);
      expect(problem.operand2).toBeLessThan(11);
      expect(problem.operand2).toBeGreaterThan(-1);
      expect(problem.operator).toEqual('X');
    });

    it("should return two random numbers where the first operand is greater than the second operand and a - sign for Subtraction", function() {
      var problem = setOperands('Subtraction');
      expect(problem.operand1).toBeLessThan(11);
      expect(problem.operand1).toBeGreaterThan(-1);
      expect(problem.operand2).toBeLessThan(11);
      expect(problem.operand2).toBeGreaterThan(-1);
      expect(problem.operand1 >= problem.operand2).toBeTruthy();
      expect(problem.operator).toEqual('-');
    });

    it("should return two random numbers where the first operand is greater than the second operand, the numbers are evenly divisible, and a / sign for Division", function() {
      var problem = setOperands('Division');
      expect(problem.operand1).toBeGreaterThan(-1);
      expect(problem.operand2).toBeGreaterThan(-1);
      expect(problem.operand1 >= problem.operand2).toBeTruthy();
      expect(problem.operand1 % problem.operand2).toEqual(0);
      expect(problem.operator).toEqual('/');
    });
  });
});
