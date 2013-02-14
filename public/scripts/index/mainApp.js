MainApp = new Backbone.Marionette.Application();

MainApp.addRegions({
    content: "#content"
});

MainApp.vent.on("routing:started", function(){
    if( ! Backbone.History.started) Backbone.history.start();
});


//MyApp.addInitializer(function(options){
//  var galleryCategoriesView = new GalleryCategoriesView({
//    collection: options.galleryCategories
//  });
//  MyApp.mainRegion.show(galleryCategoriesView);
//});

$(document).ready(function(){
//  var galleryCategories = new GalleryCategories([
//      new GalleryCategory({ imagePath: 'images/cats/cat2.jpg' }),
//      new GalleryCategory({ imagePath: 'images/cats/cat1.jpg' }),
//      new GalleryCategory({ imagePath: 'images/cats/cat3.jpg' }),
//      new GalleryCategory({ imagePath: 'images/cats/cat4.jpg' })
//  ]);

  MainApp.start({});
});