import jsonData from './data/madrid';

$(function () {
  'use strict';

  /* data that represents a single winery */
  let Winery = function (winery) {
    this.name = ko.observable(winery.name);
    this.address = ko.observable(winery.address);
    this.latitude = ko.observable(winery.lat);
    this.longitude = ko.observable(winery.lng);
    this.venueId = ko.observable(winery.venueId);
    this.photos = ko.observableArray([]);
    this.likes = ko.observable();
    this.webSite = ko.observable(winery.web);
    this.requestNotMade = ko.observable(true);

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
      animation: google.maps.Animation.DROP,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Bunch_of_grapes_icon.svg/32px-Bunch_of_grapes_icon.svg.png'
    }));
  };

  function getFoursquareData (winery) {
    const lat = winery.latitude();
    const lng = winery.longitude();
    const name = encodeURI(winery.name());
    const venueId = winery.venueId();
    const categories = `&categoryId=4bf58dd8d48988d14b941735,4bf58dd8d48988d119951735`;
    const limit = 5;
    const baseUrl = `https://api.foursquare.com/v2/venues/${venueId}`;
    const clientInfo = `?client_id=K44JY0THSY3L2X0VRKZ1JY2FEQULQVSTDIFOZDNNHTURX3ZF
      &client_secret=TSK1DF0XMZKHZFZYMA3Q0XXGA5FIWO4OWQM4OTTECLHUPZJJ`;
    const versionDate = `&v=20180211`;
    const coords = `&ll=${lat},${lng}`;
    const searchRadius = `&intent=checkin&radius=500`;
    const resultLimit = `&limit=${limit}`;
    const query = `&query=${name}`;
    const url = baseUrl.concat(clientInfo, versionDate);

    venueId && winery.requestNotMade() && $.ajax({
      dataType: "json",
      url: url,
      success: function (data) {
        winery.requestNotMade(false);
        let hasPhotos = data.response.venue.photos.groups.length > 0;
        let photos = (hasPhotos && data.response.venue.photos.groups[0].items) || [];
        photos.length > 0 && photos.forEach(photo => {
          let photoUrl = photo.prefix.concat("width300", photo.suffix);
          winery.photos.push(photoUrl);
          winery.likes(data.response.venue.likes.summary);
        });
      },
      error: function () {
        console.log("Error getting foursquare data");
      }
    });
  };


  /* main view model */
  let viewModel = function (data) {
    this.wineryNames = ko.observableArray([]);
    this.wineries = ko.observableArray([]);
    this.selectedWinery = ko.observable(null);
    this.searchText = ko.observable('');
    this.map = null;
    this.infoWindow = null;

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
      getFoursquareData(winery);
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
        center: { lat: 40.3050155, lng: -3.7694212 },
        zoom: 10,
        mapTypeControl: false,
        fullscreenControl: false,
        gestureHandling: 'cooperative'
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

        google.maps.event.clearListeners(marker, 'click');
        google.maps.event.addListener(marker, 'click', function () {
          modelData.showMarker(winery);

          modelData.map.setZoom(12);
          modelData.map.setCenter(marker.getPosition());
        });
      });

      markersToRemove && markersToRemove.forEach(winery => {
        winery.marker().setMap(null)
      });

    }
  };

  ko.bindingHandlers.createInfoWindow = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
      const modelData = bindingContext.$data;
      modelData.infoWindow = new google.maps.InfoWindow({
        content: '<div id="infoWindow"></div>',
        maxWidth: 300
      });
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
      const modelData = bindingContext.$data;
      const infoWindow = modelData.infoWindow;
      const wineries = modelData.wineries();
      var winery = valueAccessor().winery();

      infoWindow.close();

      if (winery) {
        var photos = winery.photos();
        infoWindow.open(modelData.map, winery.marker());
      }

      google.maps.event.addListener(infoWindow, 'domready', function () {
        const windowContent = $('#wineryDetail').html();
        $('#infoWindow').html(windowContent);

      });
    }
  }

  ko.applyBindings(new viewModel(jsonData || {}));

}());
