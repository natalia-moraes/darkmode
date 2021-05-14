app.controller('MainPageController',  ['$scope', 'githubUsers', '$location', function($scope, githubUsers, $location){

    /** USER */
    $scope.buscar = function(){
        githubUsers.getUser($scope.username).then(function (data) {
            $scope.lista = data;
            //console.log($scope.lista);
        });
        //console.log($scope.username);
        //$scope.myhostname = $location.absUrl();
    }
    
      /* DARK MODE */ 
      const $html = document.querySelector('html');
      const $checkbox = document.querySelector('#switch');
  
      $checkbox.addEventListener('change', function() {
          $html.classList.toggle('dark-mode');
      });
   

}]);
