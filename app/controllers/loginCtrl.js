function loginCtrl($scope, $location){

    $scope.redirect = function(path) {
        $location.path(path);
    }

}
