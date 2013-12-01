 <!-- Declare a module -->
var PinMe = angular.module('PinMe', ['ngResource', 'leaflet-directive', 'shoppinpal.mobile-menu', 'ui.bootstrap', 'filters']);

<!--Routing-->
PinMe.config(function ($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"app/partials/login.html",
        controller:"loginCtrl"
    })
    .when("/newuser", {
        templateUrl:"app/partials/newuser.html",
        controller:"loginCtrl"
    })
    .when("/map", {
        templateUrl:"app/partials/map.html",
        controller:"mapCtrl"
    })
    .when("/login", {
        templateUrl:"app/partials/map.html",
        controller:"mapCtrl"
    }).otherwise({
        redirectTo:"/"
    })
});

 angular.module('utils', [])
     .factory('utils', function(){
         return{
             compareStr: function(stra, strb){
                 stra = ("" + stra).toLowerCase();
                 strb = ("" + strb).toLowerCase();
                 return stra.indexOf(strb) !== -1;
             }
         };
     });

 angular.module('filters',['utils'])
     .filter('markFilter', function(utils){

         return function(input, query){
             if(!query) return input;
             var result = [];

             angular.forEach(input, function(mark){
                 if(utils.compareStr(mark.name, query) ||
                     utils.compareStr(mark.description, query))
                     result.push(mark);
             });
             return result;
         };
     });


