MainApp.GalleryApp.CategoryList = function() {
    var CategoryList = {};

    var CategoryView = Backbone.Marionette.ItemView.extend({
        template: "#gallery-category",
        tagName: "li",
        className: "span4"
    });

    var CategoryListView = Backbone.Marionette.CompositeView.extend({
        tagName: "ul",
        className: "thumbnails",
        template: "#gallery-categories",
        itemView: CategoryView
    });

    CategoryList.showCategories = function(categories){
    var categoryListView = new CategoryListView({ collection: categories });
        MainApp.GalleryApp.layout.content.show(categoryListView);
    };

    return CategoryList;
}();