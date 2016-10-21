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
                    templateUrl: "Views/Channel.html",
                    controller: "ChannelController",
                    caseInsensitiveMatch: true,
                    activeTab: "Home"
                })
                .when("/Admin", {
                    templateUrl: "Views/Admin.html",
                    controller: "AdminController",
                    caseInsensitiveMatch: true,
                    activeTab: "Admin"
                })
                .when("/Favorites", {
                    templateUrl: "Views/Favorites.html",
                    controller: "FavoritesController",
                    caseInsensitiveMatch: true,
                    activeTab: "Favorites"
                })
        }
    ]);