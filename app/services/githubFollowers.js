app.factory('githubFollowers', ['$http', function($http){

    var getFollowers =  function(username){
        return $http.get('https://api.github.com/users/'+username+'/followers')
            .then(function(response){
                return response.data;
        });
    };
    return{
        getFollowers: getFollowers
    }
}]);