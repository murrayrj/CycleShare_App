var bike;
var bikes = [];
var ajaxCalls = [];
var i;
var j;
var indexValue;

function populateForm(element) {
  indexValue = $(element).data('index');
  $.ajax({
    url: 'http://localhost:3000/bikes',
    index: $(element).data('index')
  }).done(function (data) {
    var data = data;
    var status = document.getElementById('status');
    status.value = data[this.index].status;
    $('#postcode').val(data[this.index].postcode);
    $('#description').val(data[this.index].description);
  });
}

cycleshareApp.BikeView = Backbone.View.extend({
  el: '#form',
  events: {
    'submit button#editbike' : 'populateForm',
    'submit form#newbike': 'createBike'
  },
  render: function () {
    this.collection.each(function (bike) {
      bikes.push(bike.attributes);
    });
    for (i = 0; i < bikes.length; i++) {
      ajaxCalls[ajaxCalls.length] = $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code%3A' + bikes[i].postcode + '&key=' + Keys.google_maps
      }).done(function (response) {
        if (ajaxCalls.length === bikes.length) {
          for (j = 0; j < ajaxCalls.length; j++) {
            var coords = ajaxCalls[j].responseJSON.results[0].geometry.location;
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(coords.lat, coords.lng),
              status: bikes[j].status,
              map: map,
              content: "<div id='info_window' style='width:150px; height:40px'><span style='float:left;'>" + bikes[j].description + "</span><button id='editbike' class='float:right;' data-index='" + j +  "' onClick='populateForm(this)'>Edit</button></div>"
            });
            setIconColor(marker);
            addInfoWindow(marker);
          }
        }
      });
    }
  },
  addBike: function (description, postcode, status) {
    bike = new cycleshareApp.Bike({description: description, postcode: postcode, status: status});
    $.ajax({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code%3A' + postcode + '&key=' + Keys.google_maps
    }).done(function (response) {
      var location = response.results[0].geometry.location;
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.lat, location.lng),
        status: bike.attributes.status,
        map: map,
        content: "<div id='info_window' style='width:150px; height:40px'><span style='float:left;'>" + bike.attributes.description + "</span><button id='editbike' class='float:right;' onClick='populateForm()'>Edit</button></div>"
      });
      setIconColor(marker);
      addInfoWindow(marker);
    });
    this.collection.create(bike);
    console.log(this.collection.length);
  },
  createBike: function (event) {
    event.preventDefault();
    var description = this.$('#description');
    var postcode = this.$('#postcode');
    var status = this.$('#status');
    this.addBike(description.val(), postcode.val(), status.val());
  },
});