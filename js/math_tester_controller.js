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

