function setIconColor(marker) {
  if (marker.status === "available") {
    marker.color = "blue";
  } else {
    marker.color = "red";
  }
  marker.setIcon('../bike-sharing-client/assets/img/med-' + marker.color + '-bike-marker.png');
}