import { setActiveStateForm, mapAdditions } from './form-mode.js';

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
      setActiveStateForm(mapAdditions);
    })
    .setView(
      tokyoCoordinate,
      10);
  return map;
};

export { tokyoCoordinate, createMap, tileLayer };
