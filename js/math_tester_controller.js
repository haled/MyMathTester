var mathTester = angular.module('mathTester', []);

mathTester.controller('MathTesterController', function ($scope) {
  
  $scope.problem = 'Addition';

  var mathProblem = setOperands($scope.problem);
  $scope.mathProblem = mathProblem;

  $scope.setResult = function() {
    if($scope.problem == 'Addition') {
      $scope.result = checkAddition($scope.mathProblem.operand1, $scope.mathProblem.operand2, $scope.answer);
    }
    else if($scope.problem == 'Multiplication') {
      $scope.result = checkMultiplication($scope.mathProblem.operand1, $scope.mathProblem.operand2, $scope.answer);
    }
    else if($scope.problem == 'Subtraction') {
      $scope.result = checkSubtraction($scope.mathProblem.operand1, $scope.mathProblem.operand2, $scope.answer);
    }
    else if($scope.problem == 'Division') {
      $scope.result = checkDivision($scope.mathProblem.operand1, $scope.mathProblem.operand2, $scope.answer);
    }
    $scope.answer = "";
    
    var mathProblem = setOperands($scope.problem);
    $scope.mathProblem = mathProblem;
  }

  $scope.setProblemType = function(probType) {
    var mathProblem = setOperands($scope.problem);
    $scope.mathProblem = mathProblem;
  }
});
