 var myApp=angular.module('TestMe', ['ngRoute']);

    myApp.controller('tester',function($scope){
    var product = [{"name":"Abstract","name":"Publication","name":"Inventor","name":"Language","name":"Source"
    ,"name":"Priority"}];
    $scope.main=function() {
    };
     });

     myApp.controller('master',function($scope){
     });
    myApp.controller('master',function($scope){
    });
    myApp.config(function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'index.html',
            controller: 'tester'
          }).
          when('/result', {
            templateUrl: 'results.html',
            controller: 'master'
          }).
          otherwise({
            redirectTo: '/'
          });
      });