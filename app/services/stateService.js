PinMe.factory("stateService", function ($http) {
    var latitude = 34.415;
    var longitude = -119.85;

    var radius = 10;

    var currentUser = "";
    var markers = {};
    var lastMarker = {};
    var functions = {};

    functions.getLatitude = function(){
        return latitude;
    };

    functions.setLatitude = function(la){
        latitude = la;
    };

    functions.getLongitude = function(){
        return longitude;
    };

    functions.setLongitude = function(lo){
        longitude = lo;
    };

    functions.setCurrentUser = function(username){
        currentUser = username;
    };

    functions.getCurrentUser = function(){
        return currentUser;
    };

    functions.getRadius = function(){
        return radius;
    };

    functions.setRadius = function(rad){
        radius = rad;
    };

    functions.getAllMarkers = function(){
             console.log("yolo");
        markers['me'] = {
            lat: latitude,
            lng: longitude,
            focus: false,
            name: "me",
            draggable: false,
            clickable: false,
            icon: L.icon({
                iconUrl: 'Content/img/me.png',
                iconSize: [30,30],
                iconAnchor: [14,16]
            })
        };

        var data = {
            "radius" : radius,
            "lat" : latitude,
            "lng" : longitude
        };

        $http.post("http://ec2-54-227-8-199.compute-1.amazonaws.com/get_all_markers.php", data).
            success(function(data, status){
                //alert(data);
                var json = JSON.parse(JSON.stringify(eval(data)));
                //alert(json.locations[0].distance);
                var num_of_locations = json.locations.length;

                for (var i = 0; i < num_of_locations; i++){

                    var category = json.locations[i].category;
                    var lat = json.locations[i].lat;
                    var lng = json.locations[i].lng;
                    var markerName = json.locations[i].markerName;
                    var description = json.locations[i].description;
                    var imglink = json.locations[i].image_link;
                    var username = json.locations[i].username;
                    var distance = json.locations[i].distance;
                    var pincolor = "greypin.png";

                    if(category == "Recreational"){
                        pincolor = "redpin.png";
                    }
                    else if (category == "Dining"){
                        pincolor = "purplepin.png";
                    }
                    else if (category == "Entertainment"){
                        pincolor = "bluepin.png";
                    }
                    else if (category == "Educational"){
                        pincolor = "greenpin.png";
                    }
                    else if (category == "Attraction"){
                        pincolor = "yellowpin.png";
                    }
                    else if (category == "Shops"){
                        pincolor = "orangepin.png";
                    }
                    else {
                        pincolor = "greypin.png";
                    }

                    markers[''+json.locations[i].id+''] = {
                        lat: lat,
                        lng: lng,
                        name: markerName,
                        description: description,
                        category: category,
                        username: username,
                        imglink: imglink,
                        distance: distance,
                        icon: L.icon({
                            iconUrl: 'Content/img/' + pincolor,
                            iconSize: [38,55],
                            iconAnchor: [18,55]
                        })
                    }
                }
            }).
            error(function(data, status){
                console.log("Error");
                console.log(data || "No data returned." );
                console.log(status);
                //alert(data);
            });
        return markers;
    };

    return {functions: functions};
});