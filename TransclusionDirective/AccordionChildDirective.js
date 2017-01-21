(function (angular) {
    "use strict";


    var app = angular.module("DirectiveApp");

    app.directive('accordionItem', function() {
        return {
            restrict: 'EA',
            template: '<div><div class="heading" ng-click="toggle()">{{title}}</div><div class="content" ng-show="show" ng-transclude></div></div>',
            replace: true,
            transclude: true,
            require: '^accordion',
            scope: {
                title: '@'
            },
            link: function(scope, element, attrs, accordionController) {
                scope.show = false;
                accordionController.addChild(scope);
                scope.toggle = function() {
                    scope.show = !scope.show;
                    accordionController.OpenMeHideAll(scope);
                }
            }
        }
    });


})(window.angular);

