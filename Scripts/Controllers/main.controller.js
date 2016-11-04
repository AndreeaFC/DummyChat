/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        "$http",
        "channelsApi",
        "messagesApi",
        function ($scope, $location, $route, $http, channelsApi, messagesApi) {
            $scope.$route = $route;
            $scope.models = {
                channels: [],
                messages: [],
                favorites: []
            }

            $scope.go = function (url) {
                $location.path(url);
            }

            //load and save favorites in local storage
            $scope.saveFavorites = function () {
                localStorage.setItem("favorites", JSON.stringify($scope.models.favorites));
            }

            $scope.loadFavorites = function () {
                var favorites = localStorage.getItem("favorites");
                if (favorites)
                    $scope.models.favorites = JSON.parse(favorites);
                console.log($scope.models.favorites);
            }
            
            $scope.getFavorites = function () {
                angular.forEach($scope.models.channels, function (channel) {
                    channel.subscribed = ($scope.models.favorites.indexOf(channel.id) != -1);
                });
                console.log($scope.models.favorites);
            }

            $scope.toggleSubscription = function (id) {
                console.log($scope.models.favorites);
                var index = $scope.models.favorites.indexOf(id);
                if (index == -1) {
                    $scope.models.favorites.push(id);
                    console.log($scope.models.favorites);
                } else {
                    $scope.models.favorites.splice(index, 1);
                }
                $scope.saveFavorites();
                $scope.getFavorites();
            }

            channelsApi.getChannels()
                .then(function (channels) {
                    $scope.models.channels = channels;
                    $scope.loadFavorites();
                    $scope.getFavorites();

                    console.log($scope.models.favorites);
                    console.log("Main controller get channels done");
                });

            console.log("Main controller init done");
        }
    ]);