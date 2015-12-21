angular
  .module('app')
  .controller('footerCtrl', ['$scope', function($scope) {
    //gets date, using filter on footer for copyright year
    $scope.date = new Date();

  }]);
