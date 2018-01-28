import data from './data/madrid'

(function () {
  'use strict';

  /* data that represents a single winery */
  let Winery = function (data) {
    this.name = ko.observable(data.name);
    this.latitude = ko.observable(data.lat);
    this.longitude = ko.observable(data.lat);

    this.coords = ko.computed(function () {
      return {
        'lat': this.latitude(),
        'lng': this.longitude()
      }
    }, this);
  }

  /* main view model */
  let viewModel = function (data) {
    this.wineriesNames = ko.observableArray(data.map(winery => {
      return winery.name;
    }));

    this.wineries = ko.observableArray(data.map(wineryData => {
      return new Winery(wineryData);
    }));

  }.bind(this);

  /* custom bindings */
  ko.bindingHandlers.googleMap = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
      let context = bindingContext.$data;
      context.map = new google.maps.Map(element, {
        center: { lat: 40.416775, lng: -3.703790 },
        zoom: 10
      });
    }
  }

  ko.applyBindings(new viewModel(data || []));

}());
