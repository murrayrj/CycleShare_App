var postcodes = [];
var coords = [];
cycleshareApp.BikeView = Backbone.View.extend({
  el: '#bike',
  render: function () {
    this.collection.each(function (bike) {
      postcodes.push(bike.attributes.postcode);
    });
    for (i = 0; i < postcodes.length; i++) {
      $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code%3A' + postcodes[i] + '&key=' + Keys.google_maps
      }).done(function (response) {
        coords.push(response.results[0].geometry.location);
        if (coords.length === postcodes.length) {
          for (j = 0; j < coords.length; j++) {
            var myLatlng = new google.maps.LatLng(coords[j].lat, coords[j].lng);
            var marker = new google.maps.Marker({
              position: myLatlng,
              map: map
            });
          }
        }
      });
    }
  }
});
