angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      })

    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller: 'aboutCtrl'
    })

    .state('projects', {
      url: '/projects',
      templateUrl: 'templates/projects.html',
      controller: 'projectsCtrl'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'templates/contact.html'
    })

  }])

.directive('parallax', function($window) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      $(element).parallax(scope.$eval(attrs.parallax));
    },

  };

});
