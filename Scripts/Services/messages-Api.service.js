/// <reference path="../angular.js" />

angular.module("mainModule")
    .service("messagesApi", [
        "$http",
        "$q",
        function ($http, $q) {
            var api = "http://dummyapi.kodalagom.se/api";
            var messages = api + "/messages";

            this.getMessages = function () {
                var deferred = $q.defer();

                $http.get(messages)
                  .then(function (response) {
                      deferred.resolve(response.data);
                  }, function (response) {
                      deferred.resolve([]);
                  });

                return deferred.promise;
            };

            this.addMessage = function (newMessage) {
                var deferred = $q.defer();

                $http.message(messages, newMessage)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.updateMessage = function (updateMessage) {
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