var bikes = [];
var coords = [];
var i;
var j;
var blue = '../bike-sharing-client/assets/img/med-blue-bike-marker.png';
var selected = '../bike-sharing-client/assets/img/blue-marker-selected.png'
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
function addInfoWindow(index) {
  var infowindow = new google.maps.InfoWindow({
    content: bikes[index].description
  });
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(coords[index].lat, coords[index].lng),
    icon: blue,
    map: map
  });
  google.maps.event.addListener(marker, 'click', function () {
    marker.setIcon(selected);
    infowindow.open(map, marker);
  });
  google.maps.event.addListener(map, 'click', function () {
    marker.setIcon(blue);
    infowindow.close(map, marker);
  });
}