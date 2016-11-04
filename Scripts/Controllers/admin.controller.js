/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("AdminController", [
        "$scope",
        "channelsApi",
        "messagesApi",
        function ($scope, channelsApi, messagesApi) {
            $scope.title = "Admin";
            $scope.newChannel = {};

            $scope.addChannel = function () {
                channelsApi.addChannel($scope.newChannel)
                    .then(function (data) {
                        console.log(data);
                        $scope.models.channels.push(data);
                    });
                $scope.newChannel = {};
            };

            $scope.deleteChannel = function (channel) {
                channelsApi.deleteChannel(channel.id)
                    .then(function () {
                        var index = $scope.models.channels.map(function (channel) {
                            return channel.id;
                        }).indexOf(channel.id);

                        $scope.models.channels.splice(index, 1);
                    });
            }
        }
    ]);