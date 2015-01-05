var mathTester = angular.module('mathTester', []);

mathTester.controller('MathTesterController', function ($scope) {
  
  $scope.problem = 'Addition';

  setOperatorDisplay($scope, $scope.problem);

  $scope.setResult = function() {
    if($scope.problem == 'Addition') {
      $scope.result = checkAddition($scope.operand1, $scope.operand2, $scope.answer);
    }
    else if($scope.problem == 'Multiplication') {
      $scope.result = checkMultiplication($scope.operand1, $scope.operand2, $scope.answer);
    }
    $scope.answer = "";
    
    setOperatorDisplay($scope, $scope.problem);
  }

  $scope.setProblemType = function(probType) {
    setOperatorDisplay($scope, probType);
  }
});

function checkAddition(operand1, operand2, answer) {
    var response = "FAIL!";
    if(answer == (operand1 + operand2)) {
      response = "Success!";
    }
    return response;
}

function checkMultiplication(operand1, operand2, answer) {
  var response = "FAIL!";
  if(answer == (operand1 * operand2)) {
    response = "Success!";
  }
  return response;
}

function setOperatorDisplay($scope, probType) {
  setOperands($scope);
  if(probType == 'Addition') {
    $scope.operator = "+";
  }
  else if(probType == 'Multiplication') {
    $scope.operator = "X";
  }
}

function setOperands($scope) {
  if($scope.problem == 'Addition' || $scope.problem == 'Multiplication') {
    $scope.operand1 = getRandomSingleDigitNumber();
    $scope.operand2 = getRandomSingleDigitNumber();
  }
}

function getRandomSingleDigitNumber() {
  return Math.floor((Math.random() * 10) + 1);
}
