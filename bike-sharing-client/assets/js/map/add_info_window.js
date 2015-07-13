function addInfoWindow(index) {
  var coords = ajaxCalls[index].responseJSON.results[0].geometry.location;
  var infowindow = new google.maps.InfoWindow({
    content: "<span>" + bikes[index].description + "</span><span> " + bikes[index].status + "</span>"
  });
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(coords.lat, coords.lng),
    map: map
  });
  setIconColor(marker, index);
  google.maps.event.addListener(marker, 'click', function () {
    if (bikes[index].status === "available") {
      marker.setIcon(blueselect);
    } else {
      marker.setIcon(redselect);
    }
    infowindow.open(map, marker);
  });
  google.maps.event.addListener(map, 'click', function () {
    setIconColor(marker, index);
    infowindow.close(map, marker);
  });
}