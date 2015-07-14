var prev_infowindow = false;
var infowindow;
function addInfoWindow(marker) {
  google.maps.event.addListener(marker, 'click', function () {
    if (prev_infowindow) {
      prev_infowindow.close();
    }
    infowindow = new google.maps.InfoWindow({
      content: this.content
    });
    prev_infowindow = infowindow;
    this.setIcon('../bike-sharing-client/assets/img/' + this.color + '-marker-selected.png');
    infowindow.open(map, this);
  });
  google.maps.event.addListener(map, 'click', function () {
    setIconColor(marker);
    prev_infowindow.close(map, marker);
  });
}