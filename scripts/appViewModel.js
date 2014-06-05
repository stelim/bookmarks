// Main viewmodel class
define(['knockout', 'jquery', 'Bookmark'], function (ko, jQuery, Bookmark) {
    return function AppViewModel() {
        var self = this;
        
        /*self.firstName = ko.observable('Bert');
        self.firstNameCaps = ko.computed(function () {
            return self.firstName().toUpperCase();
        }, this);
        */
        self.bookmarks = ko.observableArray([
            new Bookmark("google", "www.google.de")
        ]);
        
        self.addBookmark = function () {
            self.bookmarks.push(new Bookmark("<name>", "<url>"));
        };
        
        self.removeBookmark = function (bookmark) {
            self.bookmarks.destroy(bookmark);
        };
        
        self.existing_bookmarks = ko.computed(function () {
            return ko.utils.arrayFilter(self.bookmarks(), function (bookmark) {return !bookmark._destroy; });
        });
        
        self.save = function () {
            jQuery.ajax("/save_bookmarks", {
                data: ko.toJSON({ bookmarks: self.bookmarks() }),
                type: "post",
                contentType: "application/json",
                success: function (result) { //alert(result); 
                }
            });
        };
        
    };
});