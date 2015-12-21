angular
  .module('app')
  .controller('bannerCtrl', ['$scope', function($scope) {
    $scope.name = "Mark Sorce";
    $scope.email = "marksorce@gmail.com";
    $scope.resume = "resume";
    $scope.github = "github.com.msorce";

    angular.element(document).ready(function() {
      //cache DOM
      var $menu = $('button.navbar-toggle');
      var $nav = $('#myNavbar');
      var $navToggle = $('button.navbar-toggle');

      //animate the menu button by adding the class animate-menu-icon
      function aniMenu() {
        if ($nav.hasClass('in') && $menu.hasClass('animate-menu-icon')) {
          $menu.removeClass('animate-menu-icon');
        } else {
          $menu.addClass('animate-menu-icon');
        }
        setTimeout(function() {
          if (!$nav.hasClass('in') && $menu.hasClass('animate-menu-icon')) {
            $menu.removeClass('animate-menu-icon');
          } else if ($nav.hasClass('in') && !$menu.hasClass('animate-menu-icon')) {
            $menu.addClass('animate-menu-icon');
          }
        }, 500)
      }
      $navToggle.on('click', function() {
        aniMenu();
      });
      //makes the mobile nav collapse on click
      $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {

          aniMenu();
          $(this).collapse('hide');
        }
      });
});

  }]);
