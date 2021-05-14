app.factory('githubRepo', ['$http', function($http) {
  var getRepo = function(username) {
    //console.log(username);
   return $http.get("https://api.github.com/users/" + username + "/repos")
       .then(function(response) {
        //console.log(response.data);
           return response.data;
       });     
 }
 return {
    getRepo: getRepo
 }
}]);


