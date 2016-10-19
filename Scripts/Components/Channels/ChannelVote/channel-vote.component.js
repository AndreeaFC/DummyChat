angular.module("mainModule")
    .component("channelVote", {
        templateUrl: "Scripts/Components/ChannelVote/ChannelVote.html",
        bindings: {
            channel: "="
        },
        controller: function (channelsApi) {
            var scope = this;

            scope.vote = function (upVote) {        // Takes a bool argument
                channelsApi.vote(scope.channel, upVote)
                    .then(function (channel) {
                        scope.channel = channel;
                        console.log(scope.channel)
                    });
            }
        },
        controllerAs: "scope"
    })