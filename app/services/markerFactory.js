PinMe.factory("markerFactory", function (stateService, $http) {

    var markers = {};

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
            alert(data);
            console.log(data);
        }).
        error(function(data, status){
            console.log("Error");
            console.log(data || "No data returned." );
            console.log(status);
            alert(data);
        });

    return {markers:markers};

});