import { createSimilarAds, mapCanvas, adsArray } from './similarAds.js';
import {setActiveState, setInactiveState} from './setting-element-state.js';
import {adForm, validationRoomAndCapacity, roomNumber, type, price, changeMinAndPlaceholder, timeout, timein, moveSelectedAttribute} from './form-validation.js';

const mapFilters = document.querySelector('.map__filters');
const newPopups = createSimilarAds(adsArray);
mapCanvas.appendChild(newPopups[6]);

setInactiveState(adForm);
setInactiveState(mapFilters);

setActiveState(adForm);
setActiveState(mapFilters);

roomNumber.addEventListener('change', (evt) => {
  validationRoomAndCapacity(evt);
});

type.addEventListener('change', (evt) => {
  changeMinAndPlaceholder(evt, price);
});

timein.addEventListener('change', (evt) => {
  moveSelectedAttribute(evt, timeout);
});

timeout.addEventListener('change', (evt) => {
  moveSelectedAttribute(evt, timein);
});
