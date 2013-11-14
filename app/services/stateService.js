PinMe.factory("stateService", function () {
    var latitude = 40.095;
    var longitude = -3.823;

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

    return {functions: functions};
});