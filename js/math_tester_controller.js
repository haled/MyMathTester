var mathTester = angular.module('mathTester', []);

mathTester.controller('MathTesterController', function ($scope) {
  
  setOperands($scope);
  $scope.operator = "+";

  $scope.setResult = function() {
    $scope.result = checkAddition($scope.operand1, $scope.operand2, $scope.answer);
    $scope.answer = "";

    setOperands($scope);
    $scope.operator = "+";
  }
});

function checkAddition(operand1, operand2, answer) {
    var response = "FAIL!";
    if(answer == (operand1 + operand2)) {
      response = "Success!";
    }
    return response;
}

function setOperands($scope) {
  $scope.operand1 = getRandomSingleDigitNumber();
  $scope.operand2 = getRandomSingleDigitNumber();
}

function getRandomSingleDigitNumber() {
  return Math.floor((Math.random() * 10) + 1);
}
