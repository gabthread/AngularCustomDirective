(function (angular) {
    "use strict";


    var app = angular.module("DirectiveApp");

    //Controller Declaration
    app.controller('secondController', function ($scope) {

        $scope.dataFromParent = "Antoher Test";

    });

    //Directive Declaration
    app.directive('scopeTrueDirective', function () {
        return {
            restrict: 'E',
            scope: true,
            template: '<input type="text" ng-model="dataFromParent" style="border:1px solid red;"/>'
        }
    });


})(window.angular);
