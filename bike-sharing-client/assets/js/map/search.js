function searchLocation() {
  var locationQuery = document.getElementById('search-box').value;
  geocoder.geocode({ 'address': locationQuery}, function (results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}