angular.module("mainModule")
    .filter("formatDate", function () {
        return function (input) {
            var date = new Date(input);
            var formattedString = ("000" + date.getFullYear()).slice(-4) + "-" +
                                  ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
                                  ("0" + (date.getDate())).slice(-2) + " " +
                                  ("0" + (date.getHours())).slice(-2) + ":" +
                                  ("0" + (date.getMinutes())).slice(-2) + ":" +
                                  ("0" + (date.getSeconds())).slice(-2);
            return formattedString;
        };
    });