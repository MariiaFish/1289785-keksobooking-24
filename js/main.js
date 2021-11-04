import {renderMap} from './map.js';
import {setInactiveState} from './setting-element-state.js';
import { validationRoomAndCapacity, roomNumber, type, price, changeMinAndPlaceholder, timeout, timein, moveSelectedAttribute} from './form-validation.js';
import {mapAdditions} from './setting-element-state.js';

setInactiveState(mapAdditions);

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

renderMap();
