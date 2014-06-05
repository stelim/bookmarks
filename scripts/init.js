requirejs.config({
    baseUrl: '/scripts',
    paths: {
        'knockout' : 'knockout-3.1.0'
    }
});

require(['knockout', 'AppViewModel', 'Bookmark'], function (ko, AppViewModel, Bookmark) {
    ko.applyBindings(new AppViewModel());
});