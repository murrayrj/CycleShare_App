$(document).ready(function () {
  cycleshareApp.bikes = new cycleshareApp.BikeCollection();
  $.when(
    cycleshareApp.bikes.fetch({
      reset: true
    })
  ).then(function () {
    var router = new cycleshareApp.AppRouter();
    Backbone.history.start();
  });
});