var mathTester = angular.module('mathTester', []);

mathTester.controller('MathTesterController', function ($scope) {
  
  $scope.problem = 'Addition';

  var mathProblem = setOperands($scope.problem);
  $scope.operand1 = mathProblem.operand1;
  $scope.operand2 = mathProblem.operand2;
  $scope.operator = mathProblem.operator;

  $scope.setResult = function() {
    if($scope.problem == 'Addition') {
      $scope.result = checkAddition($scope.operand1, $scope.operand2, $scope.answer);
    }
    else if($scope.problem == 'Multiplication') {
      $scope.result = checkMultiplication($scope.operand1, $scope.operand2, $scope.answer);
    }
    else if($scope.problem == 'Subtraction') {
      $scope.result = checkSubtraction($scope.operand1, $scope.operand2, $scope.answer);
    }
    $scope.answer = "";
    
    var mathProblem = setOperands($scope.problem);
    $scope.operand1 = mathProblem.operand1;
    $scope.operand2 = mathProblem.operand2;
    $scope.operator = mathProblem.operator;
  }

  $scope.setProblemType = function(probType) {
    var mathProblem = setOperands($scope.problem);
    $scope.operand1 = mathProblem.operand1;
    $scope.operand2 = mathProblem.operand2;
    $scope.operator = mathProblem.operator;
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

function checkSubtraction(operand1, operand2, answer) {
  var response = "FAIL!";
  if(answer == (operand1 - operand2)) {
    response = "Success!";
  }
  return response;
}

function setOperands(probType) {
  var op1;
  var op2;
  var operation = '+';

  if(probType == 'Addition') {
    op1 = getRandomSingleDigitNumber();
    op2 = getRandomSingleDigitNumber();
    operation = '+';
  }
  else if(probType == 'Multiplication') {
    op1 = getRandomSingleDigitNumber();
    op2 = getRandomSingleDigitNumber();
    operation = 'X';
  }
  else if(probType == 'Subtraction') {
    op1 = getRandomSingleDigitNumber();
    op2 = getRandomSingleDigitNumber();
    operation = '-';
  }
  
  return {
    operand1: op1,
    operand2: op2,
    operator: operation
  };
}

function getRandomSingleDigitNumber() {
  return Math.floor((Math.random() * 10) + 1);
}
