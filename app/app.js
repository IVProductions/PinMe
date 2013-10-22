 <!-- Declare a module -->
var ShareThis = angular.module('ShareThis', []);

<!--Routing-->
ShareThis.config(function ($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"app/partials/login.html",
        controller:"loginCtrl"
    }).otherwise({
        redirectTo:"/"
    })
});

