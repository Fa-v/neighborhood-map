import ko from 'knockout';
import $ from 'jquery';
import jsonData from './data/wineries.js';
import './styles.css';
import fSImage from './images/Powered-by-Foursquare-one-color-300.png';
const mapsApi = require('google-maps-api')('AIzaSyBdJRlFQ3PS8weHyGfpKDDn2n11l2PUUC4');
const fourSquareElement = document.getElementById('fSquareLogo');
fourSquareElement.src = fSImage;

let map;

// Load Google Maps api asynchronously
mapsApi().then(initMap, mapError);

/**
 * @description Initializing Google maps and creating the binding for the view model
 */
function initMap(response) {
  console.log('response', response);
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 40.3050155,
      lng: -3.7694212
    },
    zoom: 7,
    mapTypeControl: false,
    fullscreenControl: false,
    gestureHandling: 'cooperative'
  });
  ko.applyBindings(new ViewModel(jsonData || {}));
}

function mapError() {
  const message = 'There was an error loading the map.';
  $('#map').prepend('<div class="error-message"><p>' + message + '</p></div>')
}

/**
 * @description Data that represents a single winery
 * @param {array} winery
 */
let Winery = function (winery) {
  this.name = ko.observable(winery.name);
  this.address = ko.observable(winery.address);
  this.latitude = ko.observable(winery.lat);
  this.longitude = ko.observable(winery.lng);
  this.venueId = ko.observable(winery.venueId);
  this.photos = ko.observableArray([]);
  this.likes = ko.observable();
  this.fSquareLink = ko.observable();
  this.fSquareCategory = ko.observable(null);
  this.webSite = ko.observable(winery.web);
  this.requestNotMade = ko.observable(true);
  this.requestError = ko.observable(null);

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

/**
 * @description Calls the foursquare API and retrieves the data
 * @param {object} winery instance of a winery
 */
function getFoursquareData(winery) {
  const venueId = winery.venueId();
  const baseUrl = `https://api.foursquare.com/v2/venues/${venueId}`;
  const clientInfo = `?client_id=K44JY0THSY3L2X0VRKZ1JY2FEQULQVSTDIFOZDNNHTURX3ZF
      &client_secret=TSK1DF0XMZKHZFZYMA3Q0XXGA5FIWO4OWQM4OTTECLHUPZJJ`;
  const versionDate = `&v=20180211`;
  const url = baseUrl.concat(clientInfo, versionDate);

  winery.requestNotMade() && $.ajax({
    dataType: 'json',
    url: url,
    success: function (data) {
      const hasPhotos = data.response.venue.photos.groups.length > 0;
      const photos = (hasPhotos && data.response.venue.photos.groups[0].items) || [];

      winery.requestNotMade(false);

      photos.length > 0 && photos.forEach(photo => {
        const photoUrl = photo.prefix.concat('width300', photo.suffix);

        winery.photos.push(photoUrl);
        winery.likes(data.response.venue.likes.summary);
        winery.fSquareLink(data.response.venue.canonicalUrl);
        winery.fSquareCategory(data.response.venue.categories[0].name);
      });
    },
    error: function () {
      winery.requestError('Error getting foursquare data.');
    }
  });
};


/**
 * @description Main view model
 * @param {array} data from the data file
 */
let ViewModel = function (data) {
  this.wineryNames = ko.observableArray([]);
  this.wineries = ko.observableArray([]);
  this.selectedWinery = ko.observable(null);
  this.searchText = ko.observable('');
  this.map = map;
  this.infoWindow = null;

  for (var winery in data) {
    this.wineryNames.push(winery.name);
    this.wineries.push(new Winery(data[winery]));
  }

  this.showMarker = function (winery) {
    winery.marker().setAnimation(google.maps.Animation.BOUNCE);

    window.setTimeout(function () {
      winery.marker().setAnimation(null);
    }, 2100);

    this.selectedWinery(winery);

    getFoursquareData(winery);
  }.bind(this);

  this.filterWineries = ko.computed(function () {
    const search = this.searchText().toLowerCase();

    return ko.utils.arrayFilter(this.wineries(), function (winery) {
      return winery.name().toLowerCase().indexOf(search) >= 0;
    });
  }.bind(this));

}.bind(this);

/**
 * @description custom binding for the map
 */
ko.bindingHandlers.googleMap = {
  update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    const modelData = bindingContext.$data;
    const wineries = modelData.wineries();
    const filteredWineries = modelData.filterWineries();
    const filteredWineryNames = filteredWineries.map(winery => winery.name());
    const markersToRemove = wineries.filter(winery => {
      return filteredWineryNames.indexOf(winery.name()) === -1;
    });

    filteredWineries.forEach(winery => {
      const marker = winery.marker();

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

/**
 * @description custom binding for the info window
 */
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
    const winery = valueAccessor().winery();

    infoWindow.close();

    if (winery) {
      const photos = winery.photos();

      infoWindow.open(modelData.map, winery.marker());
    }

    google.maps.event.addListener(infoWindow, 'domready', function () {
      const windowContent = $('#wineryDetail').html();

      $('#infoWindow').html(windowContent);
    });
  }
}