(function (angular) {
    "use strict";


    var app = angular.module("DirectiveApp");

    app.directive('draggable', function() {
        return {
            require: '^draggableList',
            link: function (scope, element, attr, listController) {
                element.css({
                    cursor: 'move',
                });

                attr.$set('draggable', true);
                

                function isBefore(x, y) {
                    if (x.parentNode == y.parentNode) {
                        for (var i = x; i; i = i.previousSibling) {
                            if (i == y)
                                return true;
                        }
                    }
                    return false;
                }

                element.on('dragenter', function(e) {
                    if (e.target.parentNode != null) {
                        if (isBefore(listController.source, e.target)) {
                            e.target.parentNode.insertBefore(listController.source, e.target)
                        } else {
                            e.target.parentNode.insertBefore(listController.source, e.target.nextSibling)
                        }
                    }
                });

                element.on('dragstart', function(e) {
                    listController.source = element[0];
                    e.dataTransfer.effectAllowed = 'move';
                });
            }
        }
    });


})(window.angular);

