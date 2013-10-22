 <!-- Declare a module -->
var PinMe = angular.module('PinMe', []);

<!--Routing-->
PinMe.config(function ($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"app/partials/login.html",
        controller:"loginCtrl"
    })
    $routeProvider.when("/newuser", {
        templateUrl:"app/partials/newuser.html",
        controller:"loginCtrl"
    }).otherwise({
        redirectTo:"/"
    })
});

