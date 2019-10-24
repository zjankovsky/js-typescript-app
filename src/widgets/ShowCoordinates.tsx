import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import { renderable, tsx } from "esri/widgets/support/widget";

import Widget from "esri/widgets/Widget";

import ShowCoordinatesViewModel from "./ShowCoordinates/ShowCoordinatesViewModel";

const CSS = {
  base: "esri-widget showcoordinates-base"
};

@subclass("app.widgets.ShowCoordinates")
export default class ShowCoordinates extends declared(Widget) {

  @aliasOf("viewModel.name")
  @renderable()
  name = "";

  @property({
    type: ShowCoordinatesViewModel
  })
  @renderable()
  viewModel: ShowCoordinatesViewModel = new ShowCoordinatesViewModel();

  render() {
    return (
      <div class={CSS.base}>
        <p>
          Welcome {this.name}!
        </p>
      </div>
    );
  }
  
}
