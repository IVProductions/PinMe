function mapCtrl($scope, stateService){
    $("#map").css({'height': window.innerHeight});

    angular.extend($scope, {
        dragging: false,
        center: {
            lat: stateService.functions.getLatitude(),
            lng: stateService.functions.getLongitude(),
            zoom: 10,
        },
        markers: {
            icongardens: {
                lat: stateService.functions.getLatitude(),
                lng: stateService.functions.getLongitude(),
                message: "Its the fucking catalina wine mixer",
                focus: true,
                draggable: false
            }
        },
        defaults: {
            scrollWheelZoom: false
        }
    });


     $scope.redirect = function(path) {
         $location.path(path);
     }
}
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







