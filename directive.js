app.directive('topBox', [
  function() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'pages/totop.html',
      controller: function($scope, $window) {
        angular.element($window).bind("scroll", function() {
          $scope.showbox = false

          if (window.pageYOffset > 100) {
            $scope.showbox = true
          } else {
            $scope.showbox = false
          }

          $scope.$apply();

        });

        $scope.scrollToTop = function() {

          $window.scrollTo(0, 0)

        };

      }
    };
  }
]);