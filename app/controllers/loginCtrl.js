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

        $http.post("ec2-54-227-8-199.compute-1.amazonaws.com/test_pin.php", data).
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

        $http.post("ec2-54-227-8-199.compute-1.amazonaws.com/login2.php", data).
            success(function(data, status){
                console.log("Success!");
                console.log(data);
                alert("Number of rows matching query: " + data);
                if (data == true) {
                    $scope.redirect('login')
                }
                else {
                    $scope.redirect('/')
                }
            }).
            error(function(data, status){
                console.log("Error");
                console.log(data || "No data returned." );
                console.log(status);
                alert(data);
            });
    }

    $scope.getImage = function(username) {

        var data = {
            "username" : username
        }

        $http.post("ec2-54-227-8-199.compute-1.amazonaws.com/get_image.php", data).
            success(function(data, status){
                console.log("Fagg" + data);
                var smallImage = document.getElementById('smallImage');
                smallImage.style.display = 'block';
                smallImage.src = data;
            }).
            error(function(data, status){
                console.log("Error");
                console.log(data || "No data returned." );
                console.log(status);
                alert(data);
            });
    }

    $scope.saveImage = function(imageData) {

        var data = {
            "imageData" : imageData
        }

        $http.post("ec2-54-227-8-199.compute-1.amazonaws.com/save_image.php", data).
            success(function(data, status){
                alert(data);
            }).
            error(function(data, status){
                alert("Failed to Save Image");
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
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
    document.addEventListener("deviceready",onDeviceReady,false);

    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    $scope.capturePhoto = function() {
        console.log("picture");
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
            destinationType: destinationType.DATA_URL });
    };

    function onPhotoDataSuccess(imageData) {
        // Uncomment to view the base64-encoded image data

        //var smallImage = document.getElementById('smallImage');

        //smallImage.style.display = 'block';

        //smallImage.src = "data:image/jpeg;base64," + imageData;

        $scope.saveImage(imageData);
    }

    function onPhotoURISuccess(imageURI) {
        // Uncomment to view the image file URI
        // console.log(imageURI);

        // Get image handle
        //
        var largeImage = document.getElementById('largeImage');

        // Unhide image elements
        //
        largeImage.style.display = 'block';

        // Show the captured photo
        // The inline CSS rules are used to resize the image
        //
        largeImage.src = imageURI;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }


    //END
}
