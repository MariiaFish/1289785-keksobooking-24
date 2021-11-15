import { addToMap, getAddressCoordinate } from './util.js';
import { mainMarker } from './markers.js';
import { address } from './form-validation.js';
import {createMap, tileLayer} from './map.js';

const renderMap = () => {
  const mapCanvas = createMap();
  addToMap(mapCanvas, tileLayer);
  addToMap(mapCanvas, mainMarker);
  mainMarker.on('moveend', (evt) => {
    const coordinates = evt.target.getLatLng();
    address.value = getAddressCoordinate(coordinates);
  });
  return mapCanvas;
};

export { renderMap };
