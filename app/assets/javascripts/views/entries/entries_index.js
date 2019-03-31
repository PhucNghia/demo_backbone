Raffler.Views.EntriesIndex = Backbone.View.extend({
  events: {

  },
  template: JST['entries/index'],
  id: 'test',
  initialize: function() {
    // return this.collection.on('reset', this.render, this);
  },
  // render: function(){
  //   this.$el.html(this.template({entries: this.colection}));
  //   // this.$el.html(this.template({entries: "Entries go here"}).el);
  //   return this;
  // },
  render: function() {
    $(this.el).html(this.template({
      entries: this.colection
    }));
    return this;
  }
});
