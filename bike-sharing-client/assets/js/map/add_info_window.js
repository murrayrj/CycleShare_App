function addInfoWindow(index) {
  var infowindow = new google.maps.InfoWindow({
    content: "<span>" + bikes[index].description+ "</span><span> " + bikes[index].status + "</span>"
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