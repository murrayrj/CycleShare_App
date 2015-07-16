var prev_infowindow = false;
var toggleBoolean = false;
var infowindow;
function addInfoWindow(marker) {
  google.maps.event.addListener(marker, 'click', function () {
    if (toggleBoolean === false && prev_infowindow !== false) {
      $("nav").toggleClass("formshow");
      toggleBoolean = false;
    };
    if (prev_infowindow) {
      prev_infowindow.close();
      setIconColor(prev_infowindow.marker);
    }
    infowindow = new google.maps.InfoWindow({
      content: this.content,
      marker: this
    });
    prev_infowindow = infowindow;
    this.setIcon('/assets/img/' + this.color + '-bike-marker.png');
    infowindow.open(map, this);
  });
  google.maps.event.addListener(map, 'click', function () {
    setIconColor(marker);
    prev_infowindow.close(map, marker);
  });
}