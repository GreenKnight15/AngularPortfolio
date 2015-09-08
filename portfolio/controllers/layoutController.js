angular.module('myApp', ['ngMaterial','ngMdIcons','ngAria','ngRoute', 'ngAnimate',])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue',{'default': '400', 'hue-1': '300',})
    .accentPalette('orange',{'default': '500', 'hue-1': '200',})
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
    }
        
    $scope.menu=[
        {title:"Home", desc:"All about me", url:"/", icon:"arrow_forward"},
        {title:"Projects", desc:"A few projects I have worked on", url:"projects.html", icon:"arrow_forward" },
        {title:"Resume", desc:"Learn a little about me", url:"resume.html", icon:"chevron_right"},
    ];

    
  })

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'homeController',
      })
      .when('/resume.html', {
        templateUrl: 'views/resume.html',
        controller: 'resumeController',
      })
    .when('/projects.html', {
        templateUrl: 'views/projects.html',
        controller: 'projectController',
      })
}])

.controller('RightCtrl', function ($scope, $http, $timeout, $mdSidenav, $log, $mdDialog) {
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
           
            if(msg != ""){
                
                var data = {"name":$scope.user_name,"email":$scope.user_email, "msg":$scope.user_msg};
                    
                $http.post("submit.php",data)
                    .success(function(data,status){
                        console.log(data);
                    })

                $mdSidenav('right').close();
            }else{
            $scope.showMsgAlert();
            }
        }else{
            $scope.showEmailAlert();
        }
    };
    
})

.controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet) {
  
  $scope.showGridBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: './views/footer.html',
      controller: 'footerController',

    }).then(function(clickedItem) {
      
    });
  };
})

.controller('footerController', function($scope, $mdBottomSheet) {
  $scope.items = [

     {  icon: 'facebook-box', url:'https://www.facebook.com/james.ritter.129', color:"#3B5998"},
     {  icon: 'google-plus-box', url:'https://google.com', color:"#DD4B39"},
     {  icon: 'linkedin-box', url:'https://www.linkedin.com/pub/james-ritter/b3/a40/21b', color:"#0077B5"},
      {  icon: 'github-box', url:'https://github.com/GreenKnight15', color:"#333"},

  ];
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem)
    window.open(clickedItem.url);
    ;
  };
})

.controller('resumeController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log){
})

.controller('projectController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log){
    
    $scope.projects =[
        {img:"copter.jpg",height:"200",title:"Summer Research",line1:"Over the summer of 2013 I was funded by West Texas A&M to design and make a prototype drone using a RasperryPi" , line2:"I used devices like range finders and wrote custom python scripts along with soldering practice", tags:["Python","ArduCopter","RasperryPi","Linux"]},
        
         {img:"powershell.jpg",height:"200",title:"PowerShell",line1:"Created a windows application that organized video files for a server, file paths were organized through a control user interface also made in powershell" , line2:"", tags:["PowerShell","GUI","Windows","ISE"]},
        
        {img:"drupal.jpg",height:"200",title:"Drupal Site",line1:"In participation with the WTAMU BuffTeks we developer a web site with drupal to show case out organization",line2:" We also made our very own testing sites where were practiced functionalities with drupal" , tags:["XAMP","Drupal","MAMP","Filezilla"]},
        
        {img:"swift.jpg",height:"200",title:"Turn Center App",line1:"Through the BuffTeks a colleage and myself are developing a mobile application for underdeveloped children at the tunr center in Amarillo, Tx",line2:"" , tags:["Swift","IOS","Apple"]},
        
        {img:"riot.jpg",height:"200",title:"Riot Game API Challenge",line1:"Riot Games, the makers of League of Legends hosted a challenge using their API, I made a web app to create item Sets for the game", line2:"Live Demo:http://lolitemchecker-jamesritter15.rhcloud.com/" , tags:["Angular.js","Node.js","Angular Material","JQuery"]},
    
         
        {img:"drupal2.jpg",height:"200",title:"Certificate Checker",line1:"Drupal Applications: Server Certifacate Checker made with druapl and php made for WTAMU web services",line2:"" , tags:["PHP","Drupal"]},
        
        {img:"Ti.png",height:"200",title:"Study Abroad App",line1:"In my course work I was assigned to a group to make a cross-platform mobile app for a study abroud group that was leaing in the summer. We used Titanium Appcelerator and Goolge APIs",line2:"Domr features included listviews, Maps, and push notifications" , tags:["Android","IOS","Alloy","Google APIs"]},
    
    
    ]

})

.controller('homeController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log){
})

.controller('goalController', function($scope) {
    $scope.shortgoals = [
      {  text: 'Become proficient with Swift 2.0 by working of mobile apps with BuffTeks-End of 2015' },
      {  text: "Graduate College with above a 3.0 GPA by taking the time to study the classes I don't enjoy-May 2016" },
        {  text: 'Excersise 3 times a week by segmenting time in my schedule-End of 2015' },
        {  text: 'Review C# before senior capstone project-End of 2015' },
    ];
    $scope.longgoals = [
      {  text: 'Find a job making meaningful software and rising, by daily increasing my knowledge of development and best practices-5 Years' },
        {  text: 'Get married have a family' },
    ];
    $scope.neverending = [
      {  text: 'Develop my penmenship through daily intentional practice' },
      {  text: 'Develop myself mentally and spiritually' },
        {  text: 'Continue to develop meaningful relationships with the people around me' },
    ];
})





