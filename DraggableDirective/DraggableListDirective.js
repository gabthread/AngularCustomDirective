(function (angular) {
    "use strict";


    var app = angular.module("DirectiveApp");

    app.directive('draggableList', function() {
        return {
            restrict: 'EA',
            templateUrl: '../templates/draggableListdirective.html',
            replace: true,
            scope: {
                items: '='
            },
            controller: function($scope) {
                $scope.source = null;
            },
            controllerAs: 'listController'
        }
    });


})(window.angular);

