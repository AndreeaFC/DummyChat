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
                messages: []
            }

            channelsApi.getChannels()
                .then(function (channels) {
                    $scope.models.channels = channels;
                })

            messagesApi.getMessages()
                .then(function (messages) {
                    $scope.models.messages = messages;
                })

            $scope.go = function (url) {
                $location.path(url);
            }

            //$http.get("http://dummyapi.kodalagom.se/api/channels")
            //    .then(function (response) {
            //        $scope.model.channels = response.data;
            //    }, function (respone) {

            //    });
        }
    ]);