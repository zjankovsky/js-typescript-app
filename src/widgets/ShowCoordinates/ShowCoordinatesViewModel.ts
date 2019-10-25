import Accessor from "esri/core/Accessor";
import MapView from "esri/views/MapView";
import Point from "esri/geometry/Point";

import { declared, property, subclass } from "esri/core/accessorSupport/decorators";

interface ShowCoordinatesViewModelConstructorParams {
  mapView: MapView
}


@subclass("app.widgets.ShowCoordinates.ShowCoordinatesViewModel")
export default class ShowCoordinatesViewModel extends declared(Accessor) {

  @property()
  mapView:MapView;

  @property()
  xCoord:Number;

  @property()
  yCoord:Number;

  constructor(params: ShowCoordinatesViewModelConstructorParams) {
    super();

    this.mapView = params.mapView;

    this.initViewModel = this.initViewModel.bind(this);

    this.initViewModel();
  }

  initViewModel():void{
    if(!this.mapView)
      throw new Error("ShowCoordinatesViewModel: mapView is not available!");
    
    this.mapView.on('pointer-move', (evnt) => {
      const point:Point = this.mapView.toMap(evnt);
      this.xCoord = point.x;
      this.yCoord = point.y;
    });
  }
}
