angular.module('myApp', ['ngMaterial','ngMdIcons','ngAria','ngRoute', 'ngAnimate',])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('orange');
})

.controller('toolBarController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log){
})

.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " clicked");
              });
          },300);
      return debounceFn;
    }
  })

.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log, $route) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
        
  
    $scope.menu=[
        {title:"Bio", desc:"Learn a little about me", url:"bio.html", icon:"chevron_right", func:'bio'},
        {title:"Projects", desc:"A few projects I have worked on", url:"projects.html", icon:"arrow_forward", func:"projects"},
    ];

    
  })

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'main.html',
        controller: 'homeController',
      })
      .when('/bio.html', {
        templateUrl: 'bio.html',
        controller: 'bioController',
      })
    .when('/projects.html', {
        templateUrl: 'projects.html',
        controller: 'projectController',
      })
}])

.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log, $mdDialog) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
    $scope.alert = '';
    $scope.showEmailAlert = function(ev) {
            $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.body))
                .title('Email Error')
                .content('Please enter a valid email address.')
                .ariaLabel('Alert email typo')
                .ok('Got it!')
                .targetEvent(ev)
             );
            };
    $scope.showMsgAlert = function(ev) {
            $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.body))
                .title('Email Error')
                .content('Please compose a thoughtful meesage.')
                .ariaLabel('Message Alert')
                .ok('Got it!')
                .targetEvent(ev)
             );
            };
    $scope.send = function(){
        var email = document.getElementById('emailInput').value;
        var msg = document.getElementById('msgInput').value;
        var emailVal = new RegExp("^.+@[^\.].*\.[a-z]{2,}$");
       
        if(emailVal.test(email)){
           $log.debug("email good");
            if(msg != ""){
                $log.debug("email sent");
                $mdSidenav('right').close()
            }else{
            $log.debug("msg wrong");
            $scope.showMsgAlert();
            }
        }else{
           $log.debug("email wrong");
            $scope.showEmailAlert();
        }
    };
    
})

.controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet) {
  
  $scope.showGridBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'footer.html',
      controller: 'footerController',

    }).then(function(clickedItem) {
      
    });
  };
})

.controller('footerController', function($scope, $mdBottomSheet) {
  $scope.items = [

     { name: 'Facebook', icon: 'facebook-box', url:'https://www.facebook.com/james.ritter.129', color:"#3B5998"},
     { name: 'Google+', icon: 'google-plus-box', url:'https://google.com', color:"#DD4B39"},
     { name: 'Linkedin', icon: 'linkedin-box', url:'https://linkedin.com', color:"#0077B5"},

  ];
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem)
    window.open(clickedItem.url);
    ;
  };
})

.controller('bioController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log){
})

.controller('projectController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log){
})

.controller('homeController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log){
})

.controller('goalController', function($scope) {
    $scope.shortgoals = [
      {  text: 'Learn Mobile development Tools' },
      {  text: 'Continue to work on my Angular.js Web development skills' },
    ];
    $scope.longgoals = [
      {  text: 'Graduate College with above a 3.0 GPA' },
      {  text: 'Find a job I enjoy and excel' },
    ];
})





