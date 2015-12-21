angular
  .module('app')
  .controller('projectsCtrl', ['$scope', function($scope) {
    $scope.title = "Projects";
    $scope.projects = ['hyundaiusa.com','irvinebmw.com','yarkbmw.com','sdacuradealers.com','jaguarnewportbeach.com','jaguarmissionviejo.com'];
    angular.element(document).ready(function() {
      var $projprev = $('#slideprev');
      var $projnext = $('#slidenext');
      $projprev.on('click', function() { $('.slick-slider').slick('slickPrev'); });
      $projnext.on('click', function() { $('.slick-slider').slick('slickNext'); });
    });
  }]);
angular
  .module('app')
  .directive('slickSlider', ['$http', function($http) {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        setTimeout(function() {
          $(el).slick(scope.$eval(attrs.slickSlider));
        }, 10)
      },
      controller: function($scope) {
        $http({
          method: 'GET',
          url: 'data/slide-data.json'
        }).then(function(result) {
          $scope.slides = result.data.slides;
          console.log($scope.slides);
        }, function(result) {
          alert("Error: No data returned");
        });
      },
    };
  }]);
