(function (angular) {
    "use strict";

    
    var app = angular.module("DirectiveApp", []);

    app.directive('customMessage', function() {
        return {
            restrict: 'EA',
            template: '<div><h2>My First Custom Directive</h2><p>This is a simple example.</p></div>'
        }
    });


})(window.angular);

