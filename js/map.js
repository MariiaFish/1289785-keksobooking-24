import { setActiveStateForm } from './form-mode.js';
import {adForm} from './form-validation.js';

const INITIAL_MAP_ZOOM_VALUE = 10;

const tokyoCoordinate = {
  lat: 35.6895,
  lng: 139.69171,
};

const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

const createMap = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      setActiveStateForm(adForm);
    })
    .setView(
      tokyoCoordinate,
      INITIAL_MAP_ZOOM_VALUE);
  return map;
};

export { tokyoCoordinate, createMap, tileLayer };
