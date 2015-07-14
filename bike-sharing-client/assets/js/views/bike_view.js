var bikes = [];
var ajaxCalls = [];
var i;
var j;
var blueselect = '../bike-sharing-client/assets/img/blue-marker-selected.png';
var redselect = '../bike-sharing-client/assets/img/red-marker-selected.png';

cycleshareApp.BikeView = Backbone.View.extend({
  el: '#bike',
  render: function () {
    this.collection.each(function (bike) {
      bikes.push(bike.attributes);
    });
    for (i = 0; i < bikes.length; i++) {
      ajaxCalls[ajaxCalls.length] = $.ajax({
        data: bikes[i].postcode,
        url: 'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code%3A' + bikes[i].postcode + '&key=' + Keys.google_maps
      }).done(function (response) {
        if (ajaxCalls.length === bikes.length) {
          for (j = 0; j < ajaxCalls.length; j++) {
            var coords = ajaxCalls[j].responseJSON.results[0].geometry.location;
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(coords.lat, coords.lng),
              status: bikes[j].status,
              map: map,
              content: "<span>" + bikes[j].description + "</span>"
            });
            setIconColor(marker);
            addInfoWindow(marker);
          }
        }
      });
    }
  }
});