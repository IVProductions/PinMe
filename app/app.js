 <!-- Declare a module -->
var PinMe = angular.module('PinMe', []);

<!--Routing-->
PinMe.config(function ($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"app/partials/login.html",
        controller:"loginCtrl"
    })
    $routeProvider.when("/newuser.html", {
        templateUrl:"app/partials/newuser.html.html",
        controller:"newUserCtrl"
    }).otherwise({
        redirectTo:"/"
    })
});

