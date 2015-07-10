cycleshareApp.AppRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },
  index: function () {
    var bikeView = new cycleshareApp.BikeView({collection: cycleshareApp.bikes});
    bikeView.render();
  }
});