/// <reference path="../angular.js" />

angular.module("mainModule")
    .service("channelsApi", [
        "$http",
        "$q",
        function ($http, $q) {
            var api = "http://dummyapi.kodalagom.se/api";
            var channels = api + "/channels";

            this.getChannels = function () {
                var deferred = $q.defer();

                $http.get(channels)
                  .then(function (response) {
                      deferred.resolve(response.data);
                  }, function (response) {
                      deferred.resolve([]);
                  });

                return deferred.promise;
            };

            this.addChannel = function (newChannel) {
                var deferred = $q.defer();

                $http.channel(channels, newChannel)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.updateChannel = function (updateMessage) {
                var deferred = $q.defer();

                $http.put(message + "/" + updateMessage.id, updateMessage)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.deleteMessage = function (id) {
                var deferred = $q.defer();

                $http.delete(message + "/" + id)
                    .then(function (response) {
                        deferred.resolve();
                    }, function (response) {
                        deferred.resolve();
                    });

                return deferred.promise;
            };            
        }
    ])