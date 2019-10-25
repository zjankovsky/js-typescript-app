import Accessor from "esri/core/Accessor";
import MapView from "esri/views/MapView";

import { declared, property, subclass } from "esri/core/accessorSupport/decorators";

interface ShowCoordinatesViewModelConstructorParams {
  mapView: MapView
}


@subclass("app.widgets.ShowCoordinates.ShowCoordinatesViewModel")
export default class ShowCoordinatesViewModel extends declared(Accessor) {

  @property()
  mapView:MapView = null;

  constructor(params: ShowCoordinatesViewModelConstructorParams) {
    super();

    this.mapView = params.mapView;
  }

}
