(function (angular) {
    "use strict";


    var app = angular.module("DirectiveApp");

    app.directive('accordion', function() {
        return {
            restrict: 'EA',
            template: '<div ng-transclude></div>',
            replace: true,
            transclude: true,
            controllerAs: 'accordionController',
            controller: function() {
                var children = [];
                this.OpenMeHideAll = function(selectedchild) {
                    angular.forEach(children, function(child) {
                        if (selectedchild != child) {
                            child.show = false;
                        }
                    });
                };

                this.addChild = function(child) {
                    children.push(child);
                }
            }
        }
    });

})(window.angular);

