/// <reference path="../../angular.js" />

angular.module("mainModule")
    .controller("ChannelController", [
        "$scope",
        "channelsApi",
        "messagesApi",
        "$routeParams",
        "$rootScope",
        "Hub",
        "$timeout",
        function ($scope, channelsApi, messagesApi, $routeParams, $rootScope, Hub, $timeout) {
            $scope.newMessage = { channelId: +$routeParams.id };
            $scope.currentChannel = {};

            var hub = new Hub("chatHub", {
                listeners: {
                    "recieveMessage": function (message) {
                        $rootScope.message = message;
                        $scope.currentChannel.messages.push(message);
                        $rootScope.$apply();
                    }
                },
                rootPath: "http://dummyapi.kodalagom.se/signalr",
            })

            $scope.addMessage = function () {
                messagesApi.addMessage($scope.newMessage)
                    .then(function (data) {
                        console.log(data)
                    });
                $scope.newMessage = {};
            };

            $scope.getChannelById = function () {
                channelsApi.getChannel($routeParams.id)
                    .then(function (data) {
                        console.log(data);
                        $scope.currentChannel = data;

                        console.log("Channel controller get channel by id done");
                    });
            };
            $scope.getChannelById();
        }
    ]);