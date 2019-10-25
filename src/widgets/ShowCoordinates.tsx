import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import { renderable, tsx } from "esri/widgets/support/widget";

import Widget from "esri/widgets/Widget";
import MapView from "esri/views/MapView";

import ShowCoordinatesViewModel from "./ShowCoordinates/ShowCoordinatesViewModel";

interface ShowCoordinatesConstructorParams {
  mapView: MapView
}

const CSS = {
  base: "esri-widget showcoordinates-base"
};

@subclass("app.widgets.ShowCoordinates")
export default class ShowCoordinates extends declared(Widget) {

  constructor(params: ShowCoordinatesConstructorParams) {
    super();

    this.viewModel =  new ShowCoordinatesViewModel({
      mapView: params.mapView
    });
  }

  @property({
    type: ShowCoordinatesViewModel
  })
  @renderable()
  viewModel: ShowCoordinatesViewModel;

  @property()
  @renderable()
  @aliasOf("viewModel.xCoord")
  xCoord:number;

  @property()
  @renderable()
  @aliasOf("viewModel.yCoord")
  yCoord:number;

  render() {
    return (
      <div class={CSS.base}>
        <p>
          {this.xCoord} ; {this.yCoord}
        </p>
      </div>
    );
  }
  
}
