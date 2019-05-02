(function () {
    "use strict";

    angular.module("LunchCheck", [])
        .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ["$scope"];

    function LunchCheckController($scope) {
        $scope.lunchCheck = function () {
            let itemNum = countItems($scope.lunchItems);
            $scope.message = message(itemNum);
        };

        function countItems(lunchItems) {
            let i = 0;
            if (lunchItems) {
                let array = lunchItems.split(",");
                for (let g in array) {
                    if (array[g].trim().length != 0) {
                        i++;
                    }
                }
            }
            return i;
        }

        /*        $scope.numberOfItems = function let str = getElementByID("lunch-menu");
        let item = str.split();*/
        function message(itemNum) {
            if (itemNum === 0) {
                return "Please enter data first"
            } else if (itemNum <= 3
        )
            {
                return "Enjoy!";
            }
        else
            {
                return "Too much!";
            }
        }
    }
})();