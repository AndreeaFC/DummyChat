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
                messages: []
            }
            
            $scope.go = function (url) {
                $location.path(url);
            }

            channelsApi.getChannels()
                .then(function (channels) {
                    $scope.models.channels = channels;
                })

            
            //$scope.loadModels = function () {
            //    var dataString = localStorage.getItem("models");

            //    if (dataString) {
            //        $scope.models = JSON.parse(dataString);
            //    }
            //    //else {
            //    //    $scope.models.channels = [];
            //    //    $scope.nextAvailableId = 0;
            //    //}
            //}

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

            //$scope.saveChannels = function () {
            //    var jsonString = JSON.stringify($scope.models.channels);
            //    localStorage.setItem("channels", jsonString);
            //}

            //$scope.loadNextAvailableId();
            //$scope.loadModels();


            //$http.get("http://dummyapi.kodalagom.se/api/channels")
            //    .then(function (response) {
            //        $scope.model.channels = response.data;
            //    }, function (respone) {

            //    });
        }
    ]);