// Main viewmodel class
define(['knockout-3.1.0', 'Bookmark'], function (ko, Bookmark) {
    return function appViewModel() {
        var self = this;
        
        self.firstName = ko.observable('Bert');
        self.firstNameCaps = ko.computed(function () {
            return self.firstName().toUpperCase();
        }, this);
        
        self.bookmarks = ko.observableArray([
            new Bookmark("google", "www.google.de")
        ]);
        
        self.addBookmark = function () {
            self.bookmarks.push(new Bookmark("<name>", "<url>"));
        };
        
        self.removeBookmark = function (bookmark) {
            self.bookmarks.remove(bookmark);
        };
    };
});