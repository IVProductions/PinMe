function loginCtrl($scope, $location, $resource, $http){

    $scope.redirect = function(path) {
        $location.path(path);
    };

    $scope.user = {
        name:"",
        password:""
    }
    $scope.connect = function(username, password) {
        console.log(username+", " + password);

        var data = {
            "data" : 1240,
			"mongo" : "HEY"
        };

        $http.post("http://folk.ntnu.no/simoneik/PinMe/app/PHP/test_pin.php", data).
            success(function(data, status){
                console.log("Success!");
                alert("Status:"+status+" Data:"+data);
            }).
            error(function(data, status){
                console.log("Error");
                console.log(data || "No data returned." );
                console.log(status);
            });


        //gets error message because we cannot test on localhost.com and send db requests to another domain (folk.ntnu.no)
        /*
        $http({method: 'POST', url: 'http://folk.ntnu.no/simoneik/Wanker/pikk.php'}).success(function(data, status, headers, config){
            $scope.returnedData = data;
            console.log(data);
        }).
        error(function(data, status, headers, config) {
            console.log("Error!");
        });
        */
    };

    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
            'Longitude: '         + position.coords.longitude         + '\n' +
            'Altitude: '          + position.coords.altitude          + '\n' +
            'Accuracy: '          + position.coords.accuracy          + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
            'Heading: '           + position.coords.heading           + '\n' +
            'Speed: '             + position.coords.speed             + '\n' +
            'Timestamp: '         + position.timestamp                + '\n');
    };

// onError Callback receives a PositionError object
//
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

}
