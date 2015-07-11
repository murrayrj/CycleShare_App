var i;
var j;
var postcodes = [];
var coords = [];
var geocoder;
var map;
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
        coords.push([response.results[0].geometry.location.lat, response.results[0].geometry.location.lng]);
        if (coords.length === postcodes.length) {
          for (j = 0; j < coords.length; j++) {
            var myLatlng = new google.maps.LatLng(coords[j][0], coords[j][1]);
            var marker = new google.maps.Marker({
              position: myLatlng,
              map: map
            });
          }
        }
      });
    }
  },
});
