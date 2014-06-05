requirejs.config({
    baseUrl: '/scripts',
    paths: {
        'knockout' : 'knockout-3.1.0',
        'jquery'   : 'jquery-1.11.1.min'
    }
});

require(['knockout', 'AppViewModel', 'Bookmark'], function (ko, AppViewModel, Bookmark) {
    ko.applyBindings(new AppViewModel());
});