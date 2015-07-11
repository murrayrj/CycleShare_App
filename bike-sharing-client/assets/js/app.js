$(document).ready(function () {
  cycleshareApp.bikes = new cycleshareApp.BikeCollection();
  $.when(
    cycleshareApp.bikes.fetch()
  ).then(function () {
    console.log(postcodes);
    var router = new cycleshareApp.AppRouter();
    Backbone.history.start();
  });
});