/// <reference path="../angular.js" />

var app = angular.module("mainModule", ["ngRoute",]);
app.value('$', $);
app.factory('signalR',
        function ($, $rootScope) {
            return {
                proxy: null,
                initialize: function (acceptMessageCallback) {
                    connection = $.hubConnection();
                    this.proxy = connection.createHubProxy('chatHub');
                    connection.start().done(function () {
                        console.log(connection.state());
                    }).fail(function (error) {
                        //console.log('Invocation of start failed. Error: ' + error)
                    });
                    this.proxy.on('recieveMessage', function (message) {
                        $rootScope.$apply(function () {
                            acceptMessageCallback(message);
                        });
                    });
                },

                sendRequest: function (callback) {
                    //if (proxy == null) {
                    //    this.initialize();
                    //}
                    this.proxy.invoke('recieveMessage');
                }
            }
        });
