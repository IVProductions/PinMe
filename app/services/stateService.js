PinMe.factory("stateService", function () {
    var latitude = 34.415;
    var longitude = -119.85;

    var currentUser = "";

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

    return {functions: functions};
});