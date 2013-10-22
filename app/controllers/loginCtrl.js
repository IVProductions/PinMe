function loginCtrl($scope, $location, $resource, $http){

    $scope.redirect = function(path) {
        $location.path(path);
    }

    $scope.user = {
        name:"",
        password:""
    }
    $scope.connect = function(username, password) {
        console.log(username+", " + password);
        //gets error message because we cannot test on localhost.com and send db requests to another domain (folk.ntnu.no)
        $http.post("http://folk.ntnu.no/simoneik/Wanker/test_pin.php", {
            // Values you with to send to php page
            names:username
            //"content": $scope.content
        }).success(function(data, status) {
            // Values returned from php handler will be in data

            }).error(function(data, status) {
                $scope.data = data || "Request failed";
                $scope.status = status;
            });
    }

}
