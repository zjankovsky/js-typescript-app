import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import { renderable, tsx } from "esri/widgets/support/widget";

import Widget from "esri/widgets/Widget";
import MapView from "esri/views/MapView";

import GeographicTransformationStep from "esri/geometry/support/GeographicTransformationStep";
import GeographicTransformation from "esri/geometry/support/GeographicTransformation";
import * as projection from "esri/geometry/projection";
import * as webMercatorUtils from "esri/geometry/support/webMercatorUtils"
// viz https://github.com/Esri/arcgis-webpack-plugin/issues/41
import { Point, SpatialReference } from "esri/geometry";

import ShowCoordinatesViewModel from "./ShowCoordinates/ShowCoordinatesViewModel";

interface ShowCoordinatesConstructorParams {
  mapView: MapView
}

const CSS = {
  base: "esri-widget zj-show-coords"
};

@subclass("app.widgets.ShowCoordinates")
export default class ShowCoordinates extends declared(Widget) {

  roundPrec:number = 100;

  wgsToSjtskTrans:GeographicTransformation = new GeographicTransformation({
    steps: [
      new GeographicTransformationStep({
        isInverse: true,
        wkid: 1623
      })
    ]
  });

  sjtskSpRef:SpatialReference = new SpatialReference({
    wkid: 5514
  });

  isProjectionLoaded:boolean = false;

  constructor(params: ShowCoordinatesConstructorParams) {
    super();

    this.viewModel =  new ShowCoordinatesViewModel({
      mapView: params.mapView
    });

    this.webMercatToSjtsk = this.webMercatToSjtsk.bind(this);

    if(!projection.isSupported()){
      console.warn("This web browser does not support projection on the client.");
      this.isProjectionLoaded = false;
    }
    else if(!projection.isLoaded()){
      console.log("Projection is not loadded yet!");

      projection.load().then(() => {
        console.log("Projection is loaded right now!");
        this.isProjectionLoaded = true;
      }).catch((err)=> {
        console.error("Projection loading ends with error!", err);
        this.isProjectionLoaded = false;
      });
    }
    else {
      this.isProjectionLoaded = true;
    }
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

  webMercatToSjtsk(coords:number[],
    sjtskSpRef:SpatialReference = this.sjtskSpRef,
    transfr:GeographicTransformation = this.wgsToSjtskTrans,
    isProjectionLoaded:boolean = this.isProjectionLoaded):number[] {
   
    if(!coords || coords.length != 2 || !coords[0] || !coords[1] || !isProjectionLoaded)
      return null;

    const wgs84:number[] = webMercatorUtils.xyToLngLat(coords[0], coords[1]);
    const sjtskPoint:Point = projection.project(new Point({x: wgs84[0], y:wgs84[1]}), sjtskSpRef , transfr) as Point;

    return [sjtskPoint.x, sjtskPoint.y];
  }

  renderPWm(x:number, y:number):object{
    let pWM = null;
    if(!!x && !!y){
      pWM = (
        <div key="wmCoords">
          <h3 class="zj-show-coords__coord-name">Souřadnice Web Mercator [x, y]</h3>
          <p class="zj-show-coords__coords">
            {x.toFixed(2)} ; {y.toFixed(2)}
          </p>
        </div>
      );
    }

    return pWM;
  }

  renderPSjtsk(x:number, y:number):object {
    const sjtsk:number[] = this.webMercatToSjtsk([x, y]);
    let pSjtsk = null;
    if(sjtsk) {
      pSjtsk = (
        <div key="sjstskCoords">
          <h3 class="zj-show-coords__coord-name">Souřadnice SJTS Křovák East North [x, y]</h3>
          <p class="zj-show-coords__coords">
            {sjtsk[0].toFixed(2)} ; {sjtsk[1].toFixed(2)}
          </p>
        </div>
      )
    }

    return pSjtsk;
  }

  render() {

    const x:number = Math.round(this.xCoord * this.roundPrec) / this.roundPrec;
    const y:number = Math.round(this.yCoord * this.roundPrec) / this.roundPrec;
    
    return (
      <div class={CSS.base}>
        {this.renderPWm(x, y)}
        {this.renderPSjtsk(x, y)}
      </div>
    );
  }
  
}
