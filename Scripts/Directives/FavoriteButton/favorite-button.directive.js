angular.module("mainModule")
    .directive("favoriteButton", [
        function () {
            return {
                restrict: "E",
                scope: {
                    subscribed: "=ngModel"
                },
                templateUrl: "Scripts/Directives/FavoriteButton/FavoriteButton.html"
            }
        }
    ]);