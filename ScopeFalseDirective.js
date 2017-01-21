(function (angular) {
    "use strict";


    var app = angular.module("DirectiveApp");

    //Controller Declaration
    app.controller('mainController', function($scope) {

        $scope.dataFromParent = "This is a Test";

    });

    //Directive Declaration
    app.directive('scopeFalseDirective', function() {
        return {
            restrict: 'E',
            scope: false,
            template: '<input type="text" ng-model="dataFromParent" style="border:1px solid red;"/>'
        }
    });


})(window.angular);

