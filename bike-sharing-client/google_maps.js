var geocoder;
var map;
function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(51.50722, -0.12750);
  var mapOptions = {
    zoom: 11,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function searchLocation() {
  var locationQuery = document.getElementById('search-box').value;
  geocoder.geocode( { 'address': locationQuery}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function populateMap(){
  
    return $.ajax({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code%3A' + postcode + '&key=AIzaSyC6hIkv32HrtRa7PfjZlzfy_JgoMeQyMWE'
    dataType: 'jsonp'
  }).done(function (response) {
}

google.maps.event.addDomListener(window, 'load', initialize);
