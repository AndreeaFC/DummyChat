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
            //$scope.nextAvailableId = 0;
            $scope.models = {
                channels: [],
                messages: [],
                favorites: []
            }
            
            $scope.go = function (url) {
                $location.path(url);
            }

            channelsApi.getChannels()
                .then(function (channels) {
                    $scope.models.channels = channels;
                })

            //load  and save favorites in local storage
            $scope.save = function () {
                localStorage.setItem("favorites", JSON.stringify($scope.models.favorites));
            }

            $scope.load = function () {
                var favorites = localStorage.getItem("favorites");
                if (favorites)
                    $scope.models.favorites = JSON.parse(favorites);
                console.log($scope.models.favorites);
            }
            
            $scope.getFavs = function () {
                angular.forEach($scope.models.channels, function (channel) {
                    if ($scope.models.favorites.indexOf(channel.id) != -1)
                        channel.subscribed = true;
                    else
                        channel.subscribed = false;
                });
                console.log($scope.models.favorites);
            }

            $scope.subscribe = function (id) {
                console.log($scope.models.favorites);
                if ($scope.models.favorites.indexOf(id) == -1) {
                    $scope.models.favorites.push(id);
                    console.log($scope.models.favorites);
                }
                $scope.save();
                $scope.getFavs();
            }

            $scope.$watch("models.channels", function (newValue) { 
                $scope.load();
                console.log($scope.models.favorites);
                $scope.getFavs();
            })


            //$scope.loadNextAvailableId = function () {
            //    var dataString = localStorage.getItem("nextAvailableId");

            //    if (dataString) {
            //        $scope.nextAvailableId = JSON.parse(dataString);
            //    }
            //}

            //$scope.retrieveNextAvailableId = function () {
            //    var id = $scope.nextAvailableId++;
            //    $scope.saveNextAvailableId();
            //    return id;
            //}

            //$scope.saveNextAvailableId = function () {
            //    var jsonString = JSON.stringify($scope.nextAvailableId);
            //    localStorage.setItem("nextAvailableId", jsonString);
            //}

            //$scope.loadNextAvailableId();
        }
    ]);