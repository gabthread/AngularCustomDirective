(function (angular) {
    "use strict";

    var app = angular.module("DirectiveApp");

    app.directive('likeButton', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/likeButton.html',
            replace: true,
            link: function (scope, element, attrs) {
                element.bind('click', function() {
                    if (element.hasClass('glyphicon-thumbs-up'))
                        element.removeClass("glyphicon-thumbs-up").addClass("glyphicon-thumbs-down");
                    else {
                        element.removeClass("glyphicon-thumbs-down").addClass("glyphicon-thumbs-up");
                    }
                });
            }
        }
    });


})(window.angular);

