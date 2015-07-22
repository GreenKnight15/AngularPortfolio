angular.module('myHomes', ['ngMaterial','ngMdIcons','ngAria','ngRoute', 'ngAnimate',])

.controller('goalController', function($scope) {
    $scope.shortgoals = [
      {  text: 'Learn Swift and Angular' },
    ];
    $scope.longgoals = [
      {  text: 'Find a job I enjoy and excel' },
    ];
})
