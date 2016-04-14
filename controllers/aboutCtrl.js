angular
  .module('app')
  .controller('aboutCtrl', ['$scope', function($scope) {
    $scope.title = "Hobbies";
    $scope.skills = ['Programming', 'Guitar', 'Studying', 'Cycling', 'Fishing'];
  }]);
