function loginCtrl($scope, $location, $resource, $http, stateService){

    $scope.redirect = function(path) {
        $location.path(path);
    };

    $scope.user = {
        name:"",
        password:"",
        confPassword:""
    }

    $scope.create_user = function(username, password, confPassword) {
        if (password==confPassword) {
            var data = {
                "username" : username,
			    "password" : password
            };

            $http.post("http://MovieShareLB-1279660590.us-east-1.elb.amazonaws.com/create_user.php", data).
                success(function(data, status){
                    console.log("Success!");
                    if (data == "Yes") {
                        alert("User Created!");
                        stateService.functions.setCurrentUser(username);
                        $scope.redirect('login');
                    }
                    else {
                        alert("Username Already Taken");
                        $scope.redirect('/newuser');
                    }
                }).
                error(function(data, status){
                    console.log("User Create Error");
                });
        }
        else {
            alert("Passwords Don't Match.")
        }
    };

    $scope.login = function(username, password) {

        var data = {
            "username" : username,
            "password" : password
        }

        $http.post("http://MovieShareLB-1279660590.us-east-1.elb.amazonaws.com/login.php", data).
            success(function(data, status){
                console.log("Success!");
                console.log(data);
                stateService.functions.setCurrentUser(username);
                if (data == true) {
                    $scope.redirect('login');
                }
                else {
                    $scope.redirect('/');
                    alert("Invalid Username/Password Combination.")
                }

            }).
            error(function(data, status){
                alert("Login Failed. Check Internet Connection.")
            });
    }




    function onSuccess (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        stateService.functions.setLatitude(latitude);
        stateService.functions.setLongitude(longitude);

    }

    function onError(error) {
        alert("Failed to Get Your Current Location.");
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

}
