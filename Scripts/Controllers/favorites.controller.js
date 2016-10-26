/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("FavoritesController", [
        "$scope",
        "channelsApi",
        "messagesApi",
        function ($scope, channelsApi, messagesApi) {
            $scope.title = "Favorites";
            $scope.getFavs();

            $scope.unsubscribe = function (ids) {
                var index = $scope.models.favorites.indexOf(ids);
                $scope.models.favorites.splice(index, 1);

                $scope.getFavs();
                $scope.save();
            }

            //channelsApi.getChannels(id)
            //    .then(function (channels) {
            //        $scope.models.channels.id = id;

            //        $scope.getFeed();
            //    });
        }
    ])