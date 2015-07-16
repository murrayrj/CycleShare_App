function setIconColor(marker) {
  if (marker.status === "available") {
    marker.color = "blue";
  }
  if (marker.status === "unavailable") {
    marker.color = "gray";
  } else {
    marker.color = "red";
  }
  marker.setIcon('/assets/img/med-' + marker.color + '-bike-marker.png');
}