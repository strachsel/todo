angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
  $scope.helloWorld = function() {
  };
  $scope.todos = [
   {"name" : "buy groceries"},
   {"name" : "buy more groceries"}
  ]
});
