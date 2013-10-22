 <!-- Declare a module -->
var PinMe = angular.module('PinMe', ['directives']);

<!--Routing-->
PinMe.config(function ($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"app/partials/login.html",
        controller:"loginCtrl"
    }).when("/newuser", {
        templateUrl:"app/partials/newuser.html",
        controller:"newUserCtrl"
    }).when("/login", {
        templateUrl:"app/partials/map.html",
        controller:"mapCtrl"
    }).otherwise({
        redirectTo:"/"
    })
});

