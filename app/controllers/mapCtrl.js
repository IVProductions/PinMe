function mapCtrl($scope, $location){

    $("#map-canvas").css({'height': window.innerHeight});

    $scope.redirect = function(path) {
        $location.path(path);
    }

}

