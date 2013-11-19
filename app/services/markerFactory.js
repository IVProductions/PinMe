PinMe.factory("markerFactory", function (stateService) {

    var markers = {
        me: {
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
        }
    };

    return {markers:markers};
});