cycleshareApp.BikeCollection = Backbone.Collection.extend({
  model: cycleshareApp.Bike,
  url: "http://localhost:3000/bikes"
});