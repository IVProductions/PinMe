function mapCtrl($scope, $location){


    $("#map-canvas").css({'height': window.innerHeight});

    // Wait for Cordova to load
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    function onDeviceReady() {
        console.log("Device is Ready");
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    // onSuccess Geolocation
    function onSuccess(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        console.log("lat: "+latitude +" long: "+longitude);

        var myOptions = {
            zoom: 15,
            center: new google.maps.LatLng(latitude,longitude),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        console.log("new map");
        var map = new google.maps.Map($("#map-canvas"), myOptions);
        console.log("done");
    }

    // onError Callback receives a PositionError object
    function onError(error) {
        alert('code: ' + error.code + '\n message: ' + error.message + '\n');
    }

/*    // configure marker
    var marker_options = {
        map: map,
        position: initialLocation
    };

    // create marker
    var marker = new google.maps.Marker(marker_options);
  */

    $scope.redirect = function(path) {
        $location.path(path);
    }

}

