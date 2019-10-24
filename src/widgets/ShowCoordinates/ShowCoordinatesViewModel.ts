import Accessor from "esri/core/Accessor";

import { declared, property, subclass } from "esri/core/accessorSupport/decorators";

@subclass("app.widgets.ShowCoordinates.ShowCoordinatesViewModel")
export default class ShowCoordinatesViewModel extends declared(Accessor) {

  @property() name = "View Coordinates";

  constructor(params?: any) {
    super();
  }

}
