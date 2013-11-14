PinMe.controller("mapCtrl", [ '$scope', function($scope) {
    var latitude = 40.095;
    var longitude = -3.823;

    $("#map").css({'height': window.innerHeight});


    var onSuccess = function(position) {
        console.log("onsuccess");
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        var myOptions = {
            zoom: 15,
            center: new google.maps.LatLng(latitude, longitude),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map($("#map-canvas"), myOptions);

        console.log("done");

         alert('Latitude: '          + position.coords.latitude          + '\n' +
         'Longitude: '         + position.coords.longitude         + '\n' +
         'Altitude: '          + position.coords.altitude          + '\n' +
         'Accuracy: '          + position.coords.accuracy          + '\n' +
         'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
         'Heading: '           + position.coords.heading           + '\n' +
         'Speed: '             + position.coords.speed             + '\n' +
         'Timestamp: '         + position.timestamp                + '\n');

    };


     function onError(error) {
     console.log("hei"+error);
     alert('code: '    + error.code    + '\n' +
     'message: ' + error.message + '\n');
     }

     navigator.geolocation.getCurrentPosition(onSuccess, onError);


    angular.extend($scope, {
        center: {
            lat: latitude,
            lng: longitude,
            zoom: 4
        },
        defaults: {
            scrollWheelZoom: false
        }
    });

     $scope.redirect = function(path) {
         $location.path(path);
     }
}]);
/*
function mapCtrl($scope, $location){






     /*
    var map = L.map('map').setView([51.505, -0.09], 13);
    /*
    google.maps.visualRefresh = true;

    angular.extend($scope, {

        position: {
            coords: {
                latitude: 45,
                longitude: -73
            }
        },

        /** the initial center of the map
        centerProperty: {
            latitude: 45,
            longitude: -73
        },

        /** the initial zoom level of the map
        zoomProperty: 4,

        /** list of markers to put in the map
        markersProperty: [ {
            latitude: 45,
            longitude: -74
        }],

        // These 2 properties will be set when clicking on the map
        clickedLatitudeProperty: null,
        clickedLongitudeProperty: null,

        eventsProperty: {
            click: function (mapModel, eventName, originalEventArgs) {
                // 'this' is the directive's scope
            }
        }
    });



    /*

    function initialize() {
        console.log("iinit");
        var mapOptions = {
            center: new google.maps.LatLng(-34.397, 150.644),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
    }
    google.maps.event.addDomListener(window, "load", initialize);

    /*


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







