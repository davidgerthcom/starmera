MainApp.GalleryApp = function() {
    var GalleryApp = {};

    var Layout = Backbone.Marionette.Layout.extend({
        template: "#gallery-layout",
        regions: {
            content: "#gallery-content"
        }
    });

    GalleryCategory = Backbone.RelationalModel.extend({
        urlRoot: 'get.php'
    });

    GalleryCategories = Backbone.Collection.extend({
        model: GalleryCategory
    });

    GalleryApp.GalleryCategories = new GalleryCategories();

    GalleryApp.initializeLayout = function() {
        GalleryApp.layout = new Layout();

        GalleryApp.layout.on("show", function(){
            MainApp.vent.trigger("layout:rendered");
        });

        MainApp.content.show(GalleryApp.layout);
    };

    GalleryApp.index = function() {
        GalleryApp.initializeLayout();

        GalleryApp.GalleryCategories.add(new GalleryCategory({imagePath: 'images/cats/cat2.jpg'}));

        var category = new GalleryCategory({
            "handle": 1
        });
        category.fetch();
        console.log(category);
    };

    return GalleryApp;
}();