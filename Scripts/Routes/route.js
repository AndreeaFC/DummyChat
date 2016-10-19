/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("mainModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider

                .when("/", {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController",
                    caseInsensitiveMatch: true,
                    activeTab: "Home"
                })
                .when("/Channel/:id", {
                    templateUrl: "Views/Channels/Channel.html",
                    controller: "ChannelController",
                    caseInsensitiveMatch: true
                })
                //.when("/Message/:id", {
                //    templateUrl: "Views/Message.html",
                //    controller: "ChannelController",
                //    caseInsensitiveMatch: true,
                //    activeTab: "Channel"
                //})
                .when("/Admin", {
                    templateUrl: "Views/Admin.html",
                    controller: "AdminController",
                    caseInsensitiveMatch: true,
                    activeTab: "Admin"
                })
                .when("/Subscriptions", {
                    templateUrl: "Views/Subscriptions.html",
                    controller: "SubscriptionsController",
                    caseInsensitiveMatch: true,
                    activeTab: "Subscriptions"
                })
        }
    ]);