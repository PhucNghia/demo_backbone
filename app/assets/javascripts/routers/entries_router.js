Raffler.Routers.Entries = Backbone.Router.extend({
  routes: {
    '': 'index',
    ':id/show': 'show'
  },
  initialize: function(){
    // this.collection = new Raffler.Collections.Entries();
    // return this.collection.fetch();
  },
  index: function(){
    // var view = new Raffler.Views.EntriesIndex();
    var view = new Raffler.Views.EntriesIndex({collection: this.collection});
    return $('#container').html(view.render().el);
  },
  show: function(id){
    alert('page show');
  },
  start: function(){
    Backbone.history.start();
  }
});
