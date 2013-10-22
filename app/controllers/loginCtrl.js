function loginCtrl($scope, $location){

    $scope.redirect = function() {
        $location.path('newuser');
    }

}
