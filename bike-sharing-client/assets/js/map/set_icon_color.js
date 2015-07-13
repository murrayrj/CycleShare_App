function setIconColor(marker, index) {
  if (bikes[index].status === "available") {
    marker.setIcon(blue);
  } else {
    marker.setIcon(red);
  }
}