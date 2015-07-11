var i;
var postcodes = [];
cycleshareApp.BikeView = Backbone.View.extend({
  el: '#bike',
  render: function () {
    var postcodeList = $('#postcodeList');
    postcodeList.empty();
    this.collection.each(function (bike) {
      postcodes.push(bike.attributes.postcode);
      postcodeList.append("<p>" + bike.attributes.postcode + "</p>");
    });
    for (i = 0; i < postcodes.length; i++) {
      $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code%3A' + postcodes[i] + '&key=' + Keys.google_maps
      }).done(function (response) {
        console.log(response.results[0].geometry.location);
      });
    }
  },
});