app.factory('githubModal', ['$http', function($http){

    var getModal = function(usuario, repositorio){
        // console.log(usuario, repositorio);
        return $http.get('http://api.github.com/repos/'+usuario+'/'+repositorio).then(function(response){
            return response;
        });
    }
    return{
        getModal: getModal
    }
}]);

