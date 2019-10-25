import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import Search from "esri/widgets/Search";
import ShowCoordinates from "../src/widgets/ShowCoordinates"

const map = new EsriMap({
  basemap: "topo"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 12
});


const search = new Search({
  view: view
});
view.ui.add(search, "top-right");
view.when(function() {
  search.search("Kongresové centrum Praha, Česká republika");
});

const showCoords = new ShowCoordinates({
  mapView: view
});
view.ui.add(showCoords, "bottom-right");