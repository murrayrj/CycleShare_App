function addInfoWindow(index) {
  var infowindow = new google.maps.InfoWindow({
    content: "<span>" + bikes[index].description + "</span><span> " + bikes[index].status + "</span>"
  });
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(coords[index].lat, coords[index].lng),
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