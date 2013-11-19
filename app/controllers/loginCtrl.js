function loginCtrl($scope, $location, $resource, $http, stateService){

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

        $http.post("http://ec2-54-227-8-199.compute-1.amazonaws.com/test_pin.php", data).
            success(function(data, status){
                console.log("Success!");
                alert(data);
                stateService.functions.setCurrentUser(username);
                $scope.redirect('login');
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

        $http.post("http://ec2-54-227-8-199.compute-1.amazonaws.com/login2.php", data).
            success(function(data, status){
                console.log("Success!");
                console.log(data);
                alert("Number of rows matching query: " + data);
                stateService.functions.setCurrentUser(username);
                if (data == true) {
                    $scope.redirect('login');
                }
                else {
                    $scope.redirect('/');
                }

            }).
            error(function(data, status){
                console.log("Error");
                console.log(data || "No data returned." );
                console.log(status);
                alert(data);
            });
    }




    function onSuccess (position) {
        console.log("onsuccess");
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        alert('Latitude: '+ latitude + '\n' +'Longitude: ' + longitude + '\n');


        stateService.functions.setLatitude(latitude);
        stateService.functions.setLongitude(longitude);

    }

    function onError(error) {
        console.log("hei"+error);
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

    // START



    //END
}
