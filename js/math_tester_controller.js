var mathTester = angular.module('mathTester', []);

mathTester.controller('MathTesterController', function ($scope) {
  
  $scope.problem = 'Addition';

  setOperands($scope, $scope.problem);
  $scope.operator = setOperatorDisplay($scope.problem);

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
    
    setOperands($scope, $scope.problem);
    $scope.operator = setOperatorDisplay($scope.problem);
  }

  $scope.setProblemType = function(probType) {
    setOperands($scope, $scope.problem);
    $scope.operator = setOperatorDisplay(probType);
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

function setOperatorDisplay(probType) {
  var op = "+";
  if(probType == 'Addition') {
    op = "+";
  }
  else if(probType == 'Multiplication') {
    op = "X";
  }
  else if(probType == 'Subtraction') {
    op = "-";
  }
  return op;
}

function setOperands($scope, probType) {
  //var fullProblem;
  if(probType == 'Addition' || probType == 'Multiplication') {
    $scope.operand1 = getRandomSingleDigitNumber();
    $scope.operand2 = getRandomSingleDigitNumber();
  }
  else if(probType == 'Subtraction') {
    $scope.operand1 = getRandomSingleDigitNumber();
    $scope.operand2 = getRandomSingleDigitNumber();
  }
  //return fullProblem;
}

function getRandomSingleDigitNumber() {
  return Math.floor((Math.random() * 10) + 1);
}
