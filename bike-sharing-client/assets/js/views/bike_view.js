var postcodes = [];
cycleshareApp.BikeView = Backbone.View.extend({
  el: '#bike',
  render: function () {
    console.log('render called');
    var postcodeList = $('#postcodeList');
    postcodeList.empty();
    this.collection.each(function (bike) {
      postcodes.push(bike.attributes.postcode);
      postcodeList.append("<p>" + bike.attributes.postcode+ "</p>");
    });
  },
});