MyApp = new Backbone.Marionette.Application();

MyApp.addRegions({
  mainRegion: "#content"
});

AngryCat = Backbone.Model.extend({
  defaults: {
    votes: 0
  },

  addVote: function(){
    this.set('votes', this.get('votes') + 1);
  },

  rankUp: function() {
    this.set({rank: this.get('rank') - 1});
  },

  rankDown: function() {
    this.set({rank: this.get('rank') + 1});
  }
});

AngryCats = Backbone.Collection.extend({
  model: AngryCat,

  initialize: function(cats){
    var rank = 1;
    _.each(cats, function(cat) {
      cat.set('rank', rank);
      ++rank;
    });

    this.on('add', function(cat){
      if( ! cat.get('rank') ){
        var error =  Error("Cat must have a rank defined before being added to the collection");
        error.name = "NoRankError";
        throw error;
      }
    });

    var self = this;

    MyApp.vent.on("rank:up", function(cat){
      if (cat.get('rank') == 1) {
        // can't increase rank of top-ranked cat
        return true;
      }
      self.rankUp(cat);
      self.sort();
    });

    MyApp.vent.on("rank:down", function(cat){
      if (cat.get('rank') == self.size()) {
        // can't decrease rank of lowest ranked cat
        return true;
      }
      self.rankDown(cat);
      self.sort();
    });

    MyApp.vent.on("cat:disqualify", function(cat){
      var disqualifiedRank = cat.get('rank');
      var catsToUprank = self.filter(
        function(cat){ return cat.get('rank') > disqualifiedRank; }
      );
      catsToUprank.forEach(function(cat){
        cat.rankUp();
      });
      self.trigger('reset');
    });
  },

  comparator: function(cat) {
    return cat.get('rank');
  },

  rankUp: function(cat) {
    // find the cat we're going to swap ranks with
    var rankToSwap = cat.get('rank') - 1;
    var otherCat = this.at(rankToSwap - 1);

    // swap ranks
    cat.rankUp();
    otherCat.rankDown();
  },

  rankDown: function(cat) {
    // find the cat we're going to swap ranks with
    var rankToSwap = cat.get('rank') + 1;
    var otherCat = this.at(rankToSwap - 1);

    // swap ranks
    cat.rankDown();
    otherCat.rankUp();
  }
});

AngryCatView = Backbone.Marionette.ItemView.extend({
  template: "#angry_cat-template",
  tagName: 'tr',
  className: 'angry_cat',

  events: {
    'click .rank_up button': 'rankUp',
    'click .rank_down button': 'rankDown',
    'click button.disqualify': 'disqualify'
  },

  initialize: function(){
    this.listenTo(this.model, "change:votes", this.render);
  },

  rankUp: function(){
    this.model.addVote();
    MyApp.vent.trigger("rank:up", this.model);
  },

  rankDown: function(){
    this.model.addVote();
    MyApp.vent.trigger("rank:down", this.model);
  },

  disqualify: function(){
    MyApp.vent.trigger("cat:disqualify", this.model);
    this.model.destroy();
  }
});

AngryCatsView = Backbone.Marionette.CompositeView.extend({
  tagName: "table",
  id: "angry_cats",
  className: "table-striped table-bordered span12",
  template: "#angry_cats-template",
  itemView: AngryCatView,

  initialize: function(){
    this.listenTo(this.collection, "sort", this.renderCollection);
  },

  appendHtml: function(collectionView, itemView){
    collectionView.$("tbody").append(itemView.el);
  }
});

MyApp.addInitializer(function(options){
  var angryCatsView = new AngryCatsView({
    collection: options.cats
  });
  MyApp.mainRegion.show(angryCatsView);
});

$(document).ready(function(){
  var cats = new AngryCats([
      new AngryCat({ name: 'Nasse Katze', image_path: 'images/cats/cat2.jpg' }),
      new AngryCat({ name: 'Bissige Katze', image_path: 'images/cats/cat1.jpg' }),
      new AngryCat({ name: 'Überraschte Katze', image_path: 'images/cats/cat3.jpg' })
  ]);

  MyApp.start({cats: cats});

  cats.add(new AngryCat({
    name: 'Launische Katze',
    image_path: 'images/cats/cat4.jpg',
    rank: cats.size() + 1
  }));
});