/// <reference path="../../angular.js" />

angular.module("mainModule")
    .controller("ChannelController", [
        "$scope",
        "channelsApi",
        "messagesApi",
        "$routeParams",
        "signalR",
        function ($scope, channelsApi, messagesApi, $routeParams, signalR) {
            $scope.newMessage = { channelId: +$routeParams.id };
            $scope.currentChannel = {};
            $scope.text = "";
            console.log($scope.text);

            $scope.recieveMessage = function () {
                signalR.sendRequest();
            }

            updateMessage = function (text) {
                $scope.text = text;
            }

            signalR.initialize(updateMessage);

            //$scope.getCurrentChannelIndex = function () {
            //    return $scope.models.channels.map(function (channel) {
            //        return channel.id;
            //    }).indexOf(+$routeParams.id);
            //}

            $scope.addMessage = function () {
                messagesApi.addMessage($scope.newMessage)
                    .then(function (data) {
                        console.log(data);

                        $scope.currentChannel.messages.push(data);
                    });
                $scope.newMessage = {};
                $scope.recieveMessage();
            };

            $scope.getChannelById = function () {
                channelsApi.getChannel($routeParams.id)
                    .then(function (data) {
                        console.log(data);
                        //$scope.models.channels[$scope.currentChannelIndex] = data[0];
                        $scope.currentChannel = data;

                        console.log("Channel controller get channel by id done");
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

            // init
            //if ($scope.models.channels == []) {
            $scope.getChannelById();
            //} else {
            //    $scope.currentChannel = $scope.getCurrentChannelIndex();
            //}
        }
    ]);