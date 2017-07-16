var app = angular.module('BlurAdmin.signin.service',[])  
.service('GetUserId', function () {  
   var savedData = {};
 function set(data) {
   savedData = data;
 }
 function get() {
 	
  		return savedData;
 	
 }

 return {
  set: set,
  get: get
 }
      
});