(function (angular) {
    "use strict";


    var app = angular.module("DirectiveApp");

    //Controller Declaration
    app.controller('thirdController', function ($scope) {

        $scope.dataFromParent = "Data from parent (controller)";
        $scope.changeValue = function () {
            $scope.dataFromParent = "CHANGED data from parent (controller)";
        }

    });

    //Directive Declaration
    app.directive('scopeIsolatedDirective', function () {
        return {
            restrict: 'E',
            scope: {
                oneWayBindData: '@', //One way attribute,
                twoWayBindData: '=', //Two way attribute
                methodBind: '&', //parentMethodBinding
            },
            template: ' One way Binding: <input type="text" ng-model="oneWayBindData"  style="border:1px solid red;width:300px;"/>' +
                '<br/> Two Way Binding <input type="text" ng-model="twoWayBindData"  style="border:1px solid red;width:300px;"/>' +
                '<br/>Method Biding : <button type="button" ng-click="methodBind()">Change Value</button>'
        }
    });


})(window.angular);
