MainApp = new Backbone.Marionette.Application();

MainApp.addRegions({
    content: "#content"
});

MainApp.vent.on("routing:started", function(){
    if( ! Backbone.History.started) Backbone.history.start();
});

$(document).ready(function(){
    MainApp.start({});
});