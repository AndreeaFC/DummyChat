/// <reference path="../../angular.js" />

angular.module("mainModule")
    .controller("ChannelController", [
        "$scope",
        "channelsApi",
        "messagesApi",
        "$routeParams",
        function ($scope, channelsApi, messagesApi, $routeParams) {
            $scope.newMessage = { channelId: +$routeParams.id };

            $scope.currentChannelIndex = $scope.models.channels.map(function (channel) {
                return channel.id;
            }).indexOf(+$routeParams.id);

            $scope.addMessage = function () {
                messagesApi.addMessage($scope.newMessage)
                    .then(function (data) {
                        console.log(data);
                        $scope.models.channels[$scope.currentChannelIndex].messages.push(data);
                    });
            };

            $scope.getChannelById = function () {
                channelsApi.getChannel($routeParams.id)
                    .then(function (data) {
                        console.log(data);
                        $scope.models.channels[$scope.currentChannelIndex] = data[0];
                    });
            };

            //messagesApi.getMessages()
            //    .then(function (messages) {
            //        $scope.models.messages = messages;
            //    })

            //TODO: timer
            //$scope.startTimer = function () {
            //    $scope.$broadcast('timer-start');
            //    $scope.timerRunning = true;
            //};

            //$scope.$on('timer-tick', function (event, args) {
            //    $scope.timerConsole += $scope.timerType + ' - event.name = ' + event.name + ', timeoutId = ' + args.timeoutId + ', millis = ' + args.millis + '\n';
            //});

            //$scope.startTimer();
        }
    ]);