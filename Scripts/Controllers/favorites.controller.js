/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("FavoritesController", [
        "$scope",
        "channelsApi",
        "messagesApi",
        function ($scope, channelsApi, messagesApi) {
            $scope.title = "Favorite channels";
            $scope.getFavorites();
        }
    ])