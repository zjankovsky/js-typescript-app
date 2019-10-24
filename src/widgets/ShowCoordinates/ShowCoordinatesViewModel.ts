import Accessor from "esri/core/Accessor";

import { declared, property, subclass } from "esri/core/accessorSupport/decorators";

@subclass("app.widgets.ShowCoordinates.ShowCoordinatesViewModel")
export default class ShowCoordinatesViewModel extends declared(Accessor) {

  @property() name = "Slagathor";

  constructor(params?: any) {
    super();
  }

}
