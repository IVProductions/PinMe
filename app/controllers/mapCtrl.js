function mapCtrl($scope, $rootScope, $routeParams, $http, stateService, markerFactory, $location, $route){
    $("#map").css({'height': window.innerHeight});

    var lat = stateService.functions.getLatitude();
    var lng = stateService.functions.getLongitude();

    var user = stateService.functions.getCurrentUser();

    var pictureSource = navigator.camera.PictureSourceType;   // picture source
    var destinationType = navigator.camera.DestinationType; // sets the format of returned value

    $scope.newMark = false;
    $scope.mark = false;

    $scope.path = "/map";

    $scope.category = "Choose a category";
    $scope.name = "";
    $scope.description = "";
    $scope.user = stateService.functions.getCurrentUser();
    $scope.markimageurl = "Content/img/basket.png";
    $scope.imgdata = "";
    $scope.radius = stateService.functions.getRadius();

    $scope.markers = {};
    angular.extend($scope, {
        dragging: false,
        center: {
            lat: lat,
            lng: lng,
            zoom: 16
        },
        markers: stateService.functions.getAllMarkers(),
        defaults: {
            tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
            scrollWheelZoom: false
        }
    });
    $scope.chosenCat = "All";
    $scope.setChosenCat = function(i) {
        switch(i)
        {
            case 1:
                $scope.chosenCat = "Recreational";
                $(".dropdown-toggle").css("background-color","rgb(255,122,122)");
                $(".dropdown-toggle").html("Recreational");
                break;
            case 2:
                $scope.chosenCat = "Dining";
                $(".dropdown-toggle").css("background-color","rgb(195,122,255)");
                $(".dropdown-toggle").html("Dining");
                break;
            case 3:
                $scope.chosenCat = "Entertainment";
                $(".dropdown-toggle").css("background-color","rgb(122,131,255)");
                $(".dropdown-toggle").html("Entertainment");
                break;
            case 4:
                $scope.chosenCat = "Educational";
                $(".dropdown-toggle").css("background-color","rgb(122,255,162)");
                $(".dropdown-toggle").html("Educational");
                break;
            case 5:
                $scope.chosenCat = "Attraction";
                $(".dropdown-toggle").css("background-color","rgb(204,255,122)");
                $(".dropdown-toggle").html("Attraction");
                break;
            case 6:
                $scope.chosenCat = "Shops";
                $(".dropdown-toggle").css("background-color","rgb(255,209,122)");
                $(".dropdown-toggle").html("Shops");
                break;
            case 7:
                $scope.chosenCat = "Others";
                $(".dropdown-toggle").css("background-color","rgb(176,176,176)");
                $(".dropdown-toggle").html("Others");
                break;
            case 8:
                $scope.chosenCat = "All";
                $(".dropdown-toggle").css("background-color","white");
                $(".dropdown-toggle").html("Choose a category");
                break;
            default:
                $scope.chosenCat = "All";
                $(".dropdown-toggle").css("background-color","white");
                $(".dropdown-toggle").html("Choose a category");
        }
        console.log($scope.chosenCat);
    };


    $scope.$on('leafletDirectiveMarker.click', function(e, args) {
        // Args will contain the marker name and other relevant information
        var name = args.markerName;
        var marker = $scope.markers[name];

        if(name != "me"){
            $scope.mark = true;
            $(".leaflet-control-zoom.leaflet-bar.leaflet-control").css("visibility","hidden");

            $scope.name = marker.name;
            $scope.category = marker.category;
            $scope.description = marker.description;
            $scope.user = marker.username;
            $scope.imglink = marker.imglink;

            $scope.setCategoryColor($scope.category);
        }
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

    $scope.updateMap = function(){
        stateService.functions.setRadius($scope.radius);
        $route.reload();
        console.log("radius: "+stateService.functions.getRadius());
        //if(stateService.functions.getRoute() == "/map"){
            //stateService.functions.setRoute("/login");
            //$scope.redirect("/map");


        //}
        //else {
        //    stateService.functions.setRoute("/map");
        //    $scope.redirect("/login");
        //}
    };

    $scope.addMarker = function() {
        // send data to server
        var data = {
            "username" : user,
            "lat" : lat,
            "lng" : lng,
            "name" : $scope.name,
            "category" : $scope.category,
            "description" : $scope.description,
            "imgdata" : $scope.imgdata
        };

        $http.post("http://MovieShareLB-1279660590.us-east-1.elb.amazonaws.com/add_marker.php", data).
            success(function(data, status){
                console.log("Success!");
                //alert(data);
                $scope.updateMap();
                //$scope.markers = stateService.functions.getAllMarkers();

            }).
            error(function(data, status){
                console.log("Error");
                console.log(data || "No data returned." );
                console.log(status);
                alert(data);
            });
    };

    $scope.closeMark = function() {
        $scope.mark = false;
        $(".leaflet-control-zoom.leaflet-bar.leaflet-control").css("visibility","visible");


        $scope.name = "";
        $scope.category = "Choose a category";
        $scope.description = "";
        $scope.user = "";
        $scope.imglink = "";

        $scope.setCategoryColor($scope.category);
    };

    $scope.changeRadius = function(up){
        if(up){
            $scope.radius += 5;
            stateService.functions.setRadius($scope.radius);
        }
        else {
            if($scope.radius > 5){
                $scope.radius -= 5;
                stateService.functions.setRadius($scope.radius);
            }
        }

    };

    $scope.setCategory = function(i) {
        switch(i)
        {
            case 1:
                $scope.category = "Recreational";
                $scope.pincolor = "redpin.png";
                $(".dropdown-toggle").css("background-color","rgb(255,122,122)");
                break;
            case 2:
                $scope.category = "Dining";
                $scope.pincolor = "purplepin.png";
                $(".dropdown-toggle").css("background-color","rgb(195,122,255)");
                break;
            case 3:
                $scope.category = "Entertainment";
                $scope.pincolor = "bluepin.png";
                $(".dropdown-toggle").css("background-color","rgb(122,131,255)");
                break;
            case 4:
                $scope.category = "Educational";
                $scope.pincolor = "greenpin.png";
                $(".dropdown-toggle").css("background-color","rgb(122,255,162)");
                break;
            case 5:
                $scope.category = "Attraction";
                $scope.pincolor = "yellowpin.png";
                $(".dropdown-toggle").css("background-color","rgb(204,255,122)");
                break;
            case 6:
                $scope.category = "Shops";
                $scope.pincolor = "orangepin.png";
                $(".dropdown-toggle").css("background-color","rgb(255,209,122)");
                break;
            case 7:
                $scope.category = "Others";
                $scope.pincolor = "greypin.png";
                $(".dropdown-toggle").css("background-color","rgb(176,176,176)");
                break;
            default:
                $scope.category = "Choose a category";
                $scope.pincolor = "greypin.png";
                $(".dropdown-toggle").css("background-color","#fff");
                $(".dropdown-toggle").css("border-color","#ccc");
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

    $scope.findMarker = function(marker){
        $scope.center.lat = parseFloat(marker.lat);
        $scope.center.lng = parseFloat(marker.lng);
        $scope.center.zoom = 16;

        $scope.mark = true;
        $(".leaflet-control-zoom.leaflet-bar.leaflet-control").css("visibility","hidden");

        $scope.name = marker.name;
        $scope.category = marker.category;
        $scope.description = marker.description;
        $scope.user = marker.username;
        $scope.imglink = marker.imglink;

        $scope.setCategoryColor($scope.category);
    };

    $scope.update = function(){
        $scope.category = "Choose a category";
        $scope.setCategoryColor($scope.category);
        $scope.markers = stateService.functions.getAllMarkers();
    };

    $scope.capturePhoto = function() {
        console.log("picture");
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20,
            destinationType: destinationType.DATA_URL });
    };

    function onPhotoDataSuccess(imageData) {
        $scope.imgdata = imageData;
    }


    $scope.getImage = function(username) {
        var data = {
            "username" : username
        }
        $http.post("http://MovieShareLB-1279660590.us-east-1.elb.amazonaws.com/get_image.php", data).
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
        $http.post("http://MovieShareLB-1279660590.us-east-1.elb.amazonaws.com/save_image.php", data).
            success(function(data, status){
                setTimeout(function() {
                    alert(data);
                }, 0);
            }).
            error(function(data, status){
                setTimeout(function() {
                    alert("Failed to Save Image.");
                }, 0);
            });
    }

    function onFail(message) {
        alert("Camera Error!");
    }


     $scope.redirect = function(path) {
         $location.path(path);
     };

    $scope.start_geolocation_timeout = function() {
        setInterval(function(){
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        },40000);
    }

    function onSuccess (position) {
        stateService.functions.setLatitude(position.coords.latitude);
        stateService.functions.setLongitude(position.coords.longitude);

    }

    function onError(error) {
        alert("Failed to Get Your Current Location.");
    }

    $scope.start_geolocation_timeout();
}

