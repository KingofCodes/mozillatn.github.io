var app=angular.module('single-page-app',['ngRoute']);


app.config(function($routeProvider){


      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
              
          })
	.when('/contribute',{
                templateUrl: 'contribute.html'
          })

        .when('/taskforce',{
                templateUrl: 'task.html'
          })

        .when('/events',{
                templateUrl: 'events.html'
          })
	.when('/request',{
                templateUrl: 'request.html'
          })
        .when('/blog',{
                templateUrl: 'blog.html'
          })
          .when('/about',{
                templateUrl: 'about.html'
          });


});


/*app.controller('cfgController',function($scope){

      $scope.message="Hello world";

});
*/

app.controller('cfgController', function($scope, $http) {
  $http.get('common.json')
       .then(function(res){
          $scope.todos = res.data;
          $scope.socialmedia = res.data.socialmedia_links;
 		
		$scope.contribution_areas = res.data.contribution_areas; 
	$scope.googleform = res.data.google_from;
	});

	$http.get('event.json')
       .then(function(res){
          $scope.eventsarray = res.data.events;

        });

 $http.get('blogpost.json')
       .then(function(res){
          $scope.blogposts = res.data.blog_links;

        });

$http.get('taskforce.json')
      .then(function(res){
		$scope.taskforceteam = res.data.taskforce;
	});
	
	$http.get('fxosapps.json')
      .then(function(res){
		$scope.fxosapps = res.data.appsdetails;
	});

});
