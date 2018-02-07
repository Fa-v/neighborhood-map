import jsonData from './data/madrid';

$(function () {
  'use strict';

  /* data that represents a single winery */
  let Winery = function (winery) {
    this.name = ko.observable(winery.name);
    this.latitude = ko.observable(winery.lat);
    this.longitude = ko.observable(winery.lng);

    this.coords = ko.computed(function () {
      return {
        'lat': this.latitude(),
        'lng': this.longitude()
      }
    }, this);

    /* creating markers as observables */
    this.marker = ko.observable(new google.maps.Marker({
      position: this.coords(),
      title: this.name(),
      animation: google.maps.Animation.DROP
    }));
  };

  /* main view model */
  let viewModel = function (data) {
    this.wineryNames = ko.observableArray([]);
    this.wineries = ko.observableArray([]);
    this.selectedWinery = ko.observable(null);
    this.searchText = ko.observable('');
    this.map = null;

    for (var winery in data) {
      this.wineryNames.push(winery.name);
      this.wineries.push(new Winery(data[winery]));
    }

    this.showMarker = function (winery) {
      winery.marker().setAnimation(google.maps.Animation.BOUNCE);
      window.setTimeout(function () {
        winery.marker().setAnimation(null);
      }, 2000);
      this.selectedWinery(winery);
    }.bind(this);

    this.filterWineries = ko.computed(function () {
      let search = this.searchText().toLowerCase();

      return ko.utils.arrayFilter(this.wineries(), function (winery) {
        return winery.name().toLowerCase().indexOf(search) >= 0;
      });
    }.bind(this));

  }.bind(this);

  /* custom bindings */
  ko.bindingHandlers.googleMap = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
      /* the modelData has all the properties of the Winery class */
      const modelData = bindingContext.$data;
      modelData.map = new google.maps.Map(element, {
        center: { lat: 40.416775, lng: -3.703790 },
        zoom: 10,
        mapTypeControl: false,
        fullscreenControl: false
      });
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
      const modelData = bindingContext.$data;
      const wineries = modelData.wineries();
      const filteredWineries = modelData.filterWineries();
      const filteredWineryNames = filteredWineries.map(winery => winery.name());
      const markersToRemove = wineries.filter(winery => {
        return filteredWineryNames.indexOf(winery.name()) === -1;
      });

      filteredWineries.forEach(winery => {
        const marker = winery.marker()
        marker.setMap(modelData.map);
        marker.addListener('click', function () {
          console.log('marker clicked!');
        });
      });

      markersToRemove && markersToRemove.forEach(winery => {
        winery.marker().setMap(null)
      });

    }
  }

  ko.applyBindings(new viewModel(jsonData || {}));

}());
