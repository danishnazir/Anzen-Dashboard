(function () {
  'use strict';
var app=angular.module('BlurAdmin.dash');
app.controller("dashboard_controller", function($scope,$http,GetUserId,PostRequests,$base64,$sce,$sessionStorage,$location,$window) 
{
$scope.items=[];

PostRequests.getCameraUrl().
then(function(response)
{
	var string=response.data.list[0].Camera_MAC.toUpperCase();
	var url="https://videoupload.hopto.org:9988/index2/SESSION="+string+"SALMAN";
	$scope.camera_mac=$sce.trustAsResourceUrl("https://videoupload.hopto.org:9988/index2/SESSION=3"); 
	console.log(string);
	return string;
});	
PostRequests.getLogs().
then(function(response)
{
  for (var i=0;i<response.data.list.length;i++)
   	{ 
   		$scope.items.push(response.data.list[i]);  		
    }
});

  //console.log("in ctrl");
 var imagePath = '../assets/img/16.png';
/*if($sessionStorage.length==null  || $sessionStorage.length === undefined )
{
	$scope.user_id=GetUserId.get();
	if(angular.equals({}, $scope.user_id))
	{	
		//$window.location.assign("/signin");
		//$location.path('/signin');
		//resolve in angularjs
		//jahan routes hain wahan
	}
	else
	{
		$scope.user_id=GetUserId.get();
		$sessionStorage.user_id=$scope.user_id;
	}
}
else
{
	console.log("value added");
	console.log($sessionStorage.user_id);
	var data1={user_id:$sessionStorage.user_id};
$http({
        url: 'http://videoupload.hopto.org:5000/api/Cam_Mac',
        method: "POST",
        data: data1
    }).
then(function(response)
    {
    var string=response.data.list[0].Camera_MAC.toUpperCase();
    var url="https://videoupload.hopto.org:9988/index2/SESSION="+string+"SALMAN";
    $scope.camera_mac=$sce.trustAsResourceUrl("https://videoupload.hopto.org:9988/index2/SESSION=3");	
   console.log( $scope.camera_mac);
    });

var data={userID:$sessionStorage.user_id};
$http({
        url: 'http://videoupload.hopto.org:5000/api/get_all_log_website',
        method: "POST",
        data: data
    }).
then(function(response)
    {
    	for (var i=0;i<response.data.list.length;i++)
    	{
			//console.log(response.data.list[i]); 
			$scope.items.push(response.data.list[i]);  		
    	}
    	 });

}*/
//console.log($scope.user_id+"here");
//make a post request 'get_all_log_website' route
//var data={userID:$scope.user_id};
   
});
  })();
