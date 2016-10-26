/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        "channelsApi",
        "messagesApi",
        function ($scope, channelsApi, messagesApi) {
            $scope.title = "Home";
            
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