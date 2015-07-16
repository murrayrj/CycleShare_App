var bike;
var bikes = [];
var ajaxCalls = [];
var markers = {};
var i;
var j;
var indexValue;
var bikeModel;

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
    $('.buttons').empty();
    $(".buttons").append("<input type='submit' id='update' data-id='" + data[this.index].id + "' value='update'>");
  });
}

cycleshareApp.BikeView = Backbone.View.extend({
  el: '#form',
  events: {
    'submit button#editbike' : 'populateForm',
    'click input#update' : 'updateBike',
    'click input#create': 'createBike'
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
              content: "<div id='info_window' style='width:150px; height:40px'><span style='float:left;'>" + bikes[j].description + "</span><button id='editbike' class='float:right;' data-index='" + j +  "' onClick='populateForm(this)'>Edit</button></div>",
              id: bikes[j].id,
            });
            markers[marker.id] =  marker;
            setIconColor(marker);
            addInfoWindow(marker);
          }
        }
      });
    }
  },
  addBikeToMap: function (bike, description, postcode, status) {
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
  },
  createBike: function (event) {
    event.preventDefault();
    var description = this.$('#description').val();
    var postcode = this.$('#postcode').val();
    var status = this.$('#status').val();
    debugger;
    bike = new cycleshareApp.Bike({description: description, postcode: postcode, status: status});
    this.collection.create(bike);
    this.addBikeToMap(bike, description, postcode, status);
  },
  updateBike: function () {
    var id = $("#update").data('id');
    var marker1 = markers[id];
    marker1.setMap(null);
    marker1 = null;
    var description = this.$('#description').val();
    var postcode = this.$('#postcode').val();
    var status = this.$('#status').val();
    bikeModel = this.collection._byId[id];
    bikeModel.set({description: description, postcode: postcode, status: status});
    bikeModel.save();
    this.collection.set({bikeModel},{remove: false});
    this.addBikeToMap(bikeModel, description, postcode, status);
    $('#description').val('');
    $('#postcode').val('');
    $('#status').val('available');
    $('.buttons').empty();
    $(".buttons").append("<input type='submit' id='create' value='create'>");
  }
});