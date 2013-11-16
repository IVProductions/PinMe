PinMe.factory("markerFactory", function () {

    var markers = {
        icongardens: {
            lat: 40.095,
            lng: -3.823,
            message: "Its the fucking catalina wine mixer",
            focus: true,
            draggable: false
        },
        icongardens1: {
            lat: 40.095,
            lng: -5.823,
            message: "Its the fucking catalina wine mixer",
            focus: true,
            draggable: false
        },
        icongardens2: {
            lat: 40.095,
            lng: -4.823,
            message: "Its the fucking catalina wine mixer",
            focus: true,
            draggable: false
        }
    };

    return {markers:markers};
});