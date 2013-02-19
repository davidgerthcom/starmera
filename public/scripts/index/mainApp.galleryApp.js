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
        model: GalleryCategory,
        url: 'get.php'
    });

    GalleryApp.GalleryCategories = new GalleryCategories();

    GalleryApp.initializeLayout = function() {        
        GalleryApp.layout = new Layout();

        GalleryApp.layout.on("show", function(){
            MainApp.vent.trigger("layout:rendered");
        });

        MainApp.content.show(GalleryApp.layout);
    };

    GalleryApp.activateNavbar = function(elementName) {
        $('#navbar-div').find('li[id^="navbar-li-"]').each(function() {
            $(this).removeClass('active');
        });
        
        $('#navbar-div').find(elementName).addClass('active');
    };

    GalleryApp.index = function() {
        GalleryApp.initializeLayout();
        
        GalleryApp.activateNavbar('li[id^="navbar-li-home"]');
        
        console.log('Home');
    };
    
    GalleryApp.showGalleryIndex = function(id) {
        GalleryApp.initializeLayout();
        
        GalleryApp.activateNavbar('li[id^="navbar-li-gallery"]');
        
        var categories = MainApp.GalleryApp.GalleryCategories;
        categories.fetch();
        MainApp.GalleryApp.CategoryList.showCategories(categories);
    };
    
    GalleryApp.showGallery = function(id) {
        GalleryApp.initializeLayout();        
                
        GalleryApp.activateNavbar('li[id^="navbar-li-gallery"]');
        
        console.log('Gallery ' + id);
    };
    
    GalleryApp.showContact = function() {
        GalleryApp.initializeLayout();
        
        GalleryApp.activateNavbar('li[id^="navbar-li-contact"]');
        
        console.log('Contact');
    };

    return GalleryApp;
}();