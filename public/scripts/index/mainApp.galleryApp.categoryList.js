MainApp.GalleryApp.CategoryList = function() {
    var CategoryList = {};

    var CategoryView = Backbone.Marionette.ItemView.extend({
        template: "#gallery-category",
        tagName: "li",
        className: "span2"
    });

    var CategoryListView = Backbone.Marionette.CompositeView.extend({
        tagName: "ul",
        className: "thumbnails",
        template: "#gallery-categories",
        itemView: CategoryView,

        events: {
            'click img': 'imageClick'
        },

        imageClick: function(){
            this.collection.add(new GalleryCategory({
                imagePath: 'images/cats/cat4.jpg'
            }));
        }
    });

    CategoryList.showCategories = function(categories){
    var categoryListView = new CategoryListView({ collection: categories });
        MainApp.GalleryApp.layout.content.show(categoryListView);
    };

    return CategoryList;
}();

MainApp.vent.on("layout:rendered", function(){
    MainApp.GalleryApp.CategoryList.showCategories(MainApp.GalleryApp.GalleryCategories);
});