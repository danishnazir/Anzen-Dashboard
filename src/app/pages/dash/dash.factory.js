var app = angular.module('BlurAdmin.dash.factory',[]).
factory('PostRequests',function($http,$sessionStorage)
{
var PostRequests={};	
PostRequests.getCameraUrl=function()
{ 
var data1={user_id:$sessionStorage.user_id};
return $http({url: 'http://:5000/api/Cam_Mac',method: "POST",data: data1});
};
PostRequests.getLogs=function()
{
var data={userID:$sessionStorage.user_id};
return $http({
        url: 'http://:5000/api/get_all_log_website',
        method: "POST",
        data: data
    });
};
return PostRequests;
                   
});

