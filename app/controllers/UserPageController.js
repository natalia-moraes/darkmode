app.controller('UserPageController', ['$scope', 'githubUsers','githubRepo','githubModal','githubFollowers', '$routeParams', function($scope, githubUsers, githubRepo, githubModal, githubFollowers ,$routeParams){
/* DARK MODE */ 
    const $html = document.querySelector('html');
    const $checkbox = document.querySelector('#switch');

    $checkbox.addEventListener('change', function() {
        $html.classList.toggle('dark-mode');
    });


    const usuario = $routeParams.username;

    // DETALHES DO USUARIO 
    githubUsers.getUser(usuario).then(function(resp){
        //console.log(resp);
        $scope.details = resp;
    });

    /** BUSCAR REPOSITORIOS */
    $scope.repos = function(){
        $scope.showRepo = true;
        $scope.orderName = '-stargazers_count';
        githubRepo.getRepo(usuario).then(function(resp){
            //console.log(resp);
            $scope.repositorios = resp;
        });
    };
    
    /** FILTRO PARA ORDENAR STARGAZERS */
    $scope.order = function(){
        /*if($scope.orderName === '-stargazers_count'){
            $scope.orderName = 'stargazers_count';
            return; 
        }
        if($scope.orderName === 'stargazers_count'){
            $scope.orderName = '-stargazers_count';
        }*/
        $scope.orderName = $scope.orderName === '-stargazers_count'? 'stargazers_count': '-stargazers_count';
    };
    
    /** BUSCAR SEGUIDORES */
    $scope.followers = function(){
        githubFollowers.getFollowers(usuario).then(function(data){
            $scope.followers = data;
            //console.log($scope.followers);
        });
    };


    /** ABRIR MODAL DETALHES DO REPOSITORIO */
    $scope.showModal = function(repo){ 
        const repositorio = repo.name;
        githubModal.getModal(usuario,repositorio).then(function(data){
            console.log(data);
        });
     };

}]);