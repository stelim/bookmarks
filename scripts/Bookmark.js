define(function () {
    return function Bookmark(name, url) {
        var self = this;
        self.name = name;
        self.url = url;
        self.created = Date.now;
    };
});