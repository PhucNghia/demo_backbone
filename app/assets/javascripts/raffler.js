window.Raffler = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function(){
    alert('Hello from Backbone!');
  },
  index: function(){
    var entry = new Raffler.Routers.Entries();
    entry.start();
    // entry.index();
    // entry.show(2);
  }
}

$(document).ready(function(){
  // Raffler.init();
  Raffler.index();
})
