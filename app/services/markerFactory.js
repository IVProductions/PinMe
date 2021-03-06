PinMe.factory("markerFactory", function (stateService, $http) {

    var markers = {};
    /*
    markers['me'] = {
        lat: stateService.functions.getLatitude(),
        lng: stateService.functions.getLongitude(),
        focus: false,
        draggable: false,
        clickable: false,
        icon: L.icon({
            iconUrl: 'Content/img/me.png',
            iconSize: [30,30],
            iconAnchor: [14,16]
        })
    };

    var data = {
        "dummy" : "dummy"
    };

    $http.post("http://ec2-54-227-8-199.compute-1.amazonaws.com/get_all_markers.php", data).
        success(function(data, status){
            var json = JSON.parse(JSON.stringify(eval(data)));
            //alert(json.locations[0].username);

            var num_of_locations = json.locations.length;

            for (var i = 0; i < num_of_locations; i++){

                var category = json.locations[i].category;
                var lat = json.locations[i].lat;
                var lng = json.locations[i].lng;
                var markerName = json.locations[i].markerName;
                var description = json.locations[i].description;
                var imglink = json.locations[i].image_link;
                var username = json.locations[i].username;
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
            alert(data);
        });
          */
    return {markers:markers};

});