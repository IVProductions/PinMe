function mapCtrl($scope, $http, stateService, markerFactory){
    $("#map").css({'height': window.innerHeight});

    var lat = stateService.functions.getLatitude();
    var lng = stateService.functions.getLongitude()

    var pictureSource = navigator.camera.PictureSourceType;   // picture source
    var destinationType = navigator.camera.DestinationType; // sets the format of returned value

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
            zoom: 16
        },
        markers: markerFactory.markers,
        defaults: {
            tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
            scrollWheelZoom: false
        }
    });

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

    $scope.addMarker = function() {
        $scope.markers['marker0001'] = {
            lat: lat,
            lng: lng,
            name: $scope.name,
            description: $scope.description,
            category: $scope.category,
            user: $scope.user,
            icon: L.icon({
                iconUrl: 'Content/img/' + $scope.pincolor,
                iconSize: [38,55],
                iconAnchor: [18,55]
            }),
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

    $scope.capturePhoto = function() {
        console.log("picture");
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20,
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

    $scope.getImage = function(username) {

        var data = {
            "username" : username
        }

        $http.post("http://ec2-54-227-8-199.compute-1.amazonaws.com/get_image.php", data).
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

        $http.post("http://ec2-54-227-8-199.compute-1.amazonaws.com/save_image.php", data).
            success(function(data, status){
                alert(data);
            }).
            error(function(data, status){
                alert("Failed to Save Image");
            });
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

     $scope.redirect = function(path) {
         $location.path(path);
     }
}

