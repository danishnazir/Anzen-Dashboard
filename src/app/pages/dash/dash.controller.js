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
	
	$scope.camera_mac=$sce.trustAsResourceUrl("https://:9988/index2/SESSION=3"); 
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


   
});
  })();
