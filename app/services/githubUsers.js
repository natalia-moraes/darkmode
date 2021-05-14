app.factory('githubUsers', ['$http', function($http) {
  
  
  var getUser = function(username) {
    //console.log(username);
   return $http.get("https://api.github.com/users/" + username)
       .then(function(response) {
        //console.log(response.data);
           return response.data;
       });
       
 }
 return {
   getUser: getUser
 }


 
}]);


