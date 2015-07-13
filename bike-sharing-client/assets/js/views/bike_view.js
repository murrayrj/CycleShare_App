var bikes = [];
var coords = [];
var i;
var j;
var blue = '../bike-sharing-client/assets/img/med-blue-bike-marker.png';
var blueselect = '../bike-sharing-client/assets/img/blue-marker-selected.png'
var red = '../bike-sharing-client/assets/img/med-red-bike-marker.png';
var redselect = '../bike-sharing-client/assets/img/red-marker-selected.png';

cycleshareApp.BikeView = Backbone.View.extend({
  el: '#bike',
  render: function () {
    this.collection.each(function (bike) {
      bikes.push(bike.attributes);
    });
    for (i = 0; i < bikes.length; i++) {
      $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code%3A' + bikes[i].postcode + '&key=' + Keys.google_maps
      }).done(function (response) {
        coords.push(response.results[0].geometry.location);
        if (coords.length === bikes.length) {
          for (j = 0; j < coords.length; j++) {
            addInfoWindow(j);
          }
        }
      });
    }
  }
});
