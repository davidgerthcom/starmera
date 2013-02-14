MainApp.Routing = function(){
    var Routing = {};

    Routing.Router = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
        "": "index"
        }
    });

    MainApp.addInitializer(function(){
        Routing.router = new Routing.Router({
            controller: MainApp.GalleryApp
        });

        MainApp.vent.trigger("routing:started");
    });

    return Routing;
}();
