# Neighborhood Map: wineries in Spain.

This is the last project for Udacity's front-end web development nanodegree.

The main goal of this project is to learn about design patterns using a framework, in this case [knockout.js](http://knockoutjs.com/index.html), and third-party APIs (Google maps and Foursquare).

I'm using [webpack](https://webpack.js.org/) to bundle the HTML, CSS and JavaScript code.
For styling the project I decided to use flexbox and CSS custom properties. Also I'm using the [google-maps-api module](https://github.com/Jam3/google-maps-api) to load asynchronously the map.

### Installation

You'll need to have installed node at least version 8.

To view this project you can clone this repository on your computer and run the the command `npm install` in the project root to install all dependencies.

After that, run the command `npm start`. This will start the server on `http://localhost:8080/` where you can see the project.

In case you don't want to install all the dependencies, you can open the `index.html` from the `dist` directory in your favorite browser.

### Credits
- [Foursquare API](https://developer.foursquare.com/)

I used the pages of Spain and Madrid tourism for reference about the winery routes.
- [Madrid tourism, winery routes](http://turismomadrid.es/es/portada/10064-madrid-rutas-del-vino.html)
- [Spain tourism, winery routes](http://www.spain.info/es/que-quieres/gastronomia/rutas-vino/)
- [Grapes.png](https://commons.wikimedia.org/wiki/File:Bunch_of_grapes_icon.svg)


Here are some resources I found useful while working on this project:
- [Foursquare](https://developer.foursquare.com/docs)
- [KnockoutJS and Google Maps binding](http://www.hoonzis.com/knockoutjs-and-google-maps-binding/)
- [Live search with knockout.js](https://opensoul.org/2011/06/23/live-search-with-knockoutjs/)
- [Debugging Bindings in Knockout 3.0](https://www.safaribooksonline.com/blog/2014/02/26/debugging-bindings-knockout-3-0/)
- [Handling Google Maps in Async and Fallback - Udacity's discussion forums](https://discussions.udacity.com/t/handling-google-maps-in-async-and-fallback/34282)
- [webpack guides](https://webpack.js.org/guides/)