function mapCtrl($scope, $location){


    $("#map-canvas").css({'height': window.innerHeight});

    var onSuccess = function(position) {

        console.log("onsuccess");
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        var myOptions = {
            zoom: 15,
            center: new google.maps.LatLng(latitude, longitude),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map($("#map-canvas"), myOptions);

        console.log("done");
        /*
        alert('Latitude: '          + position.coords.latitude          + '\n' +
            'Longitude: '         + position.coords.longitude         + '\n' +
            'Altitude: '          + position.coords.altitude          + '\n' +
            'Accuracy: '          + position.coords.accuracy          + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
            'Heading: '           + position.coords.heading           + '\n' +
            'Speed: '             + position.coords.speed             + '\n' +
            'Timestamp: '         + position.timestamp                + '\n');
            */
    };


    function onError(error) {
        console.log("hei"+error);
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

    // onSuccess Geolocation
    //function onSuccess(position) {
        //var latitude = position.coords.latitude;
        //var longitude = position.coords.longitude;

        //console.log("lat: "+latitude +" long: "+longitude);

     //
    //
    //    console.log("new map");
    //    var map = new google.maps.Map($("#map-canvas"), myOptions);
    //    console.log("done");
   // }

    // onError Callback receives a PositionError object
  //  function onError(error) {
  //      alert('code: ' + error.code + '\n message: ' + error.message + '\n');
  //  }

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

