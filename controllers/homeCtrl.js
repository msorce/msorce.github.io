angular
  .module('app')
  .controller('homeCtrl', ['$scope', function($scope) {
    $scope.title = "Hello, ";
    $scope.skills = [ 'HTML5', 'CSS3', 'Javascript', 'jQuery', 'AJAX', 'JSON', 'Angularjs', 'Nodejs', '.NET', 'PHP', 'OOP',  'Git', 'Bootstrap', 'SCSS', 'Wordpress', 'XML', 'Windows', 'OSX', 'Linux', 'Responsive Design', 'SPAs', 'REST', '.NET', 'SEO', 'Photoshop' ];
  }]);
