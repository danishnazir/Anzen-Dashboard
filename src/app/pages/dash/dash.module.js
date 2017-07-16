(function () {
  'use strict';

  angular.module('BlurAdmin.dash', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
    .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/pages/dash/dash.html',
          redirectTo: 'dashboard.form.inputs',
          'controller':'dashboard_controller',
          title: 'Dashboard',
          resolve:
          {
            "authentication":function(GetUserId,$sessionStorage,$location,$window,$sce,$http)
            {
             
              console.log($window.sessionStorage.length);
              if($window.sessionStorage.length==0)
                {
                 var user_id=GetUserId.get();
                  console.log(user_id);
                 if(angular.equals({},user_id))
                  { 
                    $location.path('/signin');  
                  }
                  else
                  {
                    $sessionStorage.user_id=user_id;
                  }
                //$window.location.assign("/signin");
                
                //resolve in angularjs
                //jahan routes hain wahan
                }
              else
                  {
                     console.log("do post requests here");
                     
                    /*function abc()
                    { 
                       var data1={user_id:$sessionStorage.user_id};
                    return  $http({
                           url: 'http://videoupload.hopto.org:5000/api/Cam_Mac',
                           method: "POST",
                           data: data1
                          }).
                      then(function(response)
                         {
                          var string=response.data.list[0].Camera_MAC.toUpperCase();
                          var url="https://videoupload.hopto.org:9988/index2/SESSION="+string+"SALMAN";
                          var camera_mac=$sce.trustAsResourceUrl("https://videoupload.hopto.org:9988/index2/SESSION=3"); 
                          console.log(camera_mac);
                          return string;
                        });
                    }*/
                    //$scope.user_id=GetUserId.get();
             // $sessionStorage.user_id=$scope.user_id;
                  }
            }
          },
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 800,
          },
        
        })

  }

})();
