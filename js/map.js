import { setActiveState } from './setting-element-state.js';
import {addToMap, getAddressCoordinate} from './util.js';
import {mapAdditions} from './setting-element-state.js';
import {mainMarker, createGroupOfMarker} from './markers.js';
import {adForm} from './form-validation.js';
import { adsArray } from './similarAds.js';

const tokyoCoordinate = {
  lat: 35.6895,
  lng: 139.69171,
};

const address = adForm.querySelector('#address');

const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

const createMap = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      setActiveState(mapAdditions);
    })
    .setView(
      tokyoCoordinate,
      10);
  address.value = getAddressCoordinate(tokyoCoordinate);
  return map;
};

const renderMap = () => {
  const mapCanvas = createMap();
  addToMap(mapCanvas, tileLayer);
  addToMap(mapCanvas, mainMarker);
  mainMarker.on('moveend', (evt) => {
    const coordinatesObj = evt.target.getLatLng();
    address.value = getAddressCoordinate(coordinatesObj);
  });
  addToMap(mapCanvas, createGroupOfMarker(adsArray));
};

export {renderMap };
