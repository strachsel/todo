angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
  $scope.ngChange = function() {
  };
  $scope.todos = [
   {"name" : "buy groceries"},
   {"name" : "buy more groceries"}
  ]
});
