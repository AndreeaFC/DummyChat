/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("FavoritesController", [
        "$scope",
        "channelsApi",
        "messagesApi",
        function ($scope, channelsApi, messagesApi) {
            $scope.title = "Favorites"

            //channelsApi.getChannels(id)
            //    .then(function (channels) {
            //        $scope.models.channels.id = id;

            //        $scope.getFeed();
            //    });

            //$scope.getFeed = function () {
            //    angular.forEach($scope.models.channels, function (channel) {
            //        if ($scope.models.subscribedAuthors.indexOf(channel.id) != -1)
            //            channel.subscribed = true;
            //        else
            //            channel.subscribed = false;
            //    });

            //    console.log($scope.models.feed);
            //}

            //$scope.unsubscribe = function (id) {
            //    $scope.models.channels.id = $scope.models.channels.filter(function (id) {
            //        return  $scope.models.channels.id != id;
            //    });

            //    $scope.getFeed();
            //    $scope.save();
            //}

            //$scope.save = function () {
            //    localStorage.setItem("models", JSON.stringify($scope.models));
            //}

            //$scope.load = function () {
            //    var models = localStorage.getItem("models");
            //    if (models)
            //        $scope.models = JSON.parse(models);
            //}

            //$scope.go = function (url) {
            //    $location.path(url);
            //};

            //$scope.load();
            //$scope.getFeed();
        }
    ])