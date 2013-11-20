PinMe.directive('slider', function ($parse, stateService) {
    return {
        restrict: 'E',
        replace: true,
        template: '<input type="text" />',
        link: function ($scope, element, attrs) {
            var model = $parse(attrs.model);
            var slider = $(element[0]).slider();

            slider.slider('setValue', stateService.functions.getRadius());

            slider.on('slide', function(ev) {
                model.assign($scope, ev.value);
                $scope.$apply();
            });

            slider.on('slideStop', function(ev) {
                stateService.functions.setRadius(ev.value);
            });
        }
    }
});