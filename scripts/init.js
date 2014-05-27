require(['knockout-3.1.0', 'appViewModel', 'Bookmark'], function (ko, appViewModel, Bookmark) {
    ko.applyBindings(new appViewModel());
});