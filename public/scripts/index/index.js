MyApp = new Backbone.Marionette.Application();

MyApp.addRegions({
  mainRegion: "#content"
});

GalleryCategory = Backbone.Model.extend({});

GalleryCategories = Backbone.Collection.extend({
  model: GalleryCategory
});

GalleryCategoryView = Backbone.Marionette.ItemView.extend({
  template: "#gallery-category",
  tagName: "li",
  className: "span2"
});

GalleryCategoriesView = Backbone.Marionette.CompositeView.extend({
  tagName: "ul",
  className: "thumbnails",
  id: "gallery-categories",
  template: "#gallery-categories",
  itemView: GalleryCategoryView,
  
  events: {
    'click img': 'imageClick'
  },
  
  imageClick: function(){
    this.collection.add(new GalleryCategory({
        imagePath: 'images/cats/cat4.jpg'
    }));
  }
});

MyApp.addInitializer(function(options){
  var galleryCategoriesView = new GalleryCategoriesView({
    collection: options.galleryCategories
  });
  MyApp.mainRegion.show(galleryCategoriesView);
});

$(document).ready(function(){
  var galleryCategories = new GalleryCategories([
      new GalleryCategory({ imagePath: 'images/cats/cat2.jpg' }),
      new GalleryCategory({ imagePath: 'images/cats/cat1.jpg' }),
      new GalleryCategory({ imagePath: 'images/cats/cat3.jpg' }),
      new GalleryCategory({ imagePath: 'images/cats/cat4.jpg' })
  ]);

  MyApp.start({galleryCategories: galleryCategories});
});