app.controller('userprofilecontroller', function($scope,$localStorage){
	console.log("user profile");
	$scope.findFriend = $localStorage.user.findFriend;
	console.log($scope.findFriend);
	$scope.logOut = function(){
      console.log("logOut");
      $http({
       url: '/logOut',
       method:'POST'
      }).then(function(success){
       console.log(success);
       $location.path('/');
      },function(error){
       console.log(error);
      })
    }
});
