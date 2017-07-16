(function () {
  'use strict';

  angular.module('BlurAdmin.signin')
      .controller('SignInCtrl', SignInCtrl);
  function SignInCtrl($scope, $state, $window, $timeout,User,$location,$http,GetUserId) {
    //console.log("hi");


  $scope.submit = function()
  {
   //console.log(GetUserId.square(10)+"here");
   var username=$scope.username;
   var password=$scope.password;
   var data={username:username,password:password};
   $http({
        url: 'http://videoupload.hopto.org:5000/api/users_login',
        method: "POST",
        data: data
    })
    .then(function(response) {
      //console.log(response.data.User_Id);
      GetUserId.set(response.data.User_Id);
      if(response.data.Message=="Invalid Username")
      {
        alert("Invalid Username");
      }
      else
      {
        //console.log("here")
        //$cookieStore.put('username',username);
        $location.path('/dashboard');

       //  document.location.href = "dashboard"
      }

    })
  }
    }
  /** @ngInject */


})();
