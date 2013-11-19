function mapCtrl($scope, stateService, markerFactory){
    $("#map").css({'height': window.innerHeight});

    var lat = stateService.functions.getLatitude();
    var lng = stateService.functions.getLongitude();

    $scope.newMark = false;
    $scope.mark = false;

    $scope.category = "Choose a category";
    $scope.name = "";
    $scope.description = "";
    $scope.user = "Crampleg";
    $scope.markimageurl = "Content/img/basket.png";

    angular.extend($scope, {
        dragging: false,
        center: {
            lat: lat,
            lng: lng,
            zoom: 14
        },
        markers: markerFactory.markers,
        defaults: {
            tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
            scrollWheelZoom: false
        }
    });

    $scope.$on('leafletDirectiveMarker.click', function(e, args) {
        // Args will contain the marker name and other relevant information
        $scope.mark = true;
        $(".leaflet-control-zoom.leaflet-bar.leaflet-control").css("visibility","hidden");

        var name = args.markerName;
        var marker = $scope.markers[name];

        $scope.name = marker.name;
        $scope.category = marker.category;
        $scope.description = marker.description;

        $scope.setCategoryColor($scope.category);

        //$scope.category = args.markers[name].
        //console.log($scope.markers[name].name);
        //console.log($scope.markers.getLatitude());
        //console.log($scope.markers.name.lng);

       // console.log($scope.markers.islavista.message);
       // console.log(args.markerName);
    });
    $scope.$on('leafletDirectiveMarker.popupopen', function(e, args) {
        // Args will contain the marker name and other relevant information
        console.log("Leaflet Popup Open");
    });
    $scope.$on('leafletDirectiveMarker.popupclose', function(e, args) {
        // Args will contain the marker name and other relevant information
        console.log("Leaflet Popup Close");
    });

    $scope.showMark = function() {
        console.log("showmark");
        mark = true;
    };

    $scope.addMarker = function() {
        $scope.markers['marker0001'] = {
            lat: lat,
            lng: lng,
            name: $scope.name,
            description: $scope.description,
            category: $scope.category,
            user: $scope.user,
            focus: true,
            draggable: false
        };
    };

    $scope.closeMark = function() {
        $scope.mark = false;
        $(".leaflet-control-zoom.leaflet-bar.leaflet-control").css("visibility","visible");
    }

    $scope.setCategory = function(i) {
        switch(i)
        {
            case 1:
                $scope.category = "Recreational";
                $(".dropdown-toggle").css("background-color","rgb(255,122,122)");
                break;
            case 2:
                $scope.category = "Dining";
                $(".dropdown-toggle").css("background-color","rgb(195,122,255)");
                break;
            case 3:
                $scope.category = "Entertainment";
                $(".dropdown-toggle").css("background-color","rgb(122,131,255)");
                break;
            case 4:
                $scope.category = "Educational";
                $(".dropdown-toggle").css("background-color","rgb(122,255,162)");
                break;
            case 5:
                $scope.category = "Attraction";
                $(".dropdown-toggle").css("background-color","rgb(204,255,122)");
                break;
            case 6:
                $scope.category = "Shops";
                $(".dropdown-toggle").css("background-color","rgb(255,209,122)");
                break;
            case 7:
                $scope.category = "Others";
                $(".dropdown-toggle").css("background-color","rgb(176,176,176)");
                break;
            default:
                $scope.category = "Choose a category";
        }
    };

    $scope.setCategoryColor = function(category) {
        if(category == "Recreational"){
            $("#markcategory").css("background-color","rgb(255,122,122)");
        }
        else if (category == "Dining"){
            $("#markcategory").css("background-color","rgb(195,122,255)");
        }
        else if (category == "Entertainment"){
            $("#markcategory").css("background-color","rgb(122,131,255)");
        }
        else if (category == "Educational"){
            $("#markcategory").css("background-color","rgb(122,255,162)");
        }
        else if (category == "Attraction"){
            $("#markcategory").css("background-color","rgb(204,255,122)");
        }
        else if (category == "Shops"){
            $("#markcategory").css("background-color","rgb(255,209,122)");
        }
        else {
            $("#markcategory").css("background-color","rgb(176,176,176)");
        }
    };



     $scope.redirect = function(path) {
         $location.path(path);
     }
}

function myFunction(lng){
    console.log(lng.class);
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







