/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        "channelsApi",
        "messagesApi",
        function ($scope, channelsApi, messagesApi) {
            $scope.title = "Home";

            $scope.subscribe = function (id) {
                if ($scope.models.channels.indexOf(id) == -1) {
                    $scope.models.channels.push(id);
                }

                $scope.save();
                $scope.getFeed();
            }


            //$scope.addChannel = function () {
            //    channelsApi.addChannel($scope.newChannel)
            //        .then(function (data) {
            //            console.log(data);
            //            $scope.models.channels.push(data);
            //        });
            //};


            //$scope.deleteChannel = function (channel) {
            //    postsApi.deleteChannel(channel.id)
            //        .then(function () {
            //            var index = $scope.models.channels.map(function (channel) {
            //                return channel.id;
            //            }).indexOf(channel.id);

            //            $scope.models.channels.splice(index, 1);
            //        });
            //}

            //$scope.deleteMessage = function (message) {
            //    postsApi.deleteMessage(message.id)
            //        .then(function () {
            //            var index = $scope.models.messages.map(function (message) {
            //                return message.id;
            //            }).indexOf(message.id);

            //            $scope.models.messages.splice(index, 1);
            //        });
            //}
        }
    ]);