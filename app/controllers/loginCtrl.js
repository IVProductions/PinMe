function loginCtrl($scope, $location, $resource, $http){

    $scope.redirect = function(path) {
        $location.path(path);
    };

    $scope.user = {
        name:"",
        password:""
    }
    $scope.create_user = function(username, password) {
        console.log(username+", " + password);

        var data = {
            "username" : username,
			"password" : password
        };

        $http.post("http://folk.ntnu.no/simoneik/PinMe/test_pin.php", data).
            success(function(data, status){
                console.log("Success!");
                alert(data);
            }).
            error(function(data, status){
                console.log("Error");
                console.log(data || "No data returned." );
                console.log(status);
                alert(data);
            });
    };

    $scope.login = function(username, password) {

        var data = {
            "username" : username,
            "password" : password
        }

        $http.post("http://folk.ntnu.no/simoneik/PinMe/login.php", data).
            success(function(data, status){
                console.log("Success!");
                alert(data);
                //redirect('login')
            }).
            error(function(data, status){
                console.log("Error");
                console.log(data || "No data returned." );
                console.log(status);
                alert(data);
            });

    }



}
