import { createSimilarAds, mapCanvas, adsArray } from './similarAds.js';
import {setActiveState, setInactiveState} from './setting-element-state.js';
import {adForm} from './form-validation.js';

const mapFilters = document.querySelector('.map__filters');
const newPopups = createSimilarAds(adsArray);
mapCanvas.appendChild(newPopups[6]);

setInactiveState(adForm);
setInactiveState(mapFilters);

setActiveState(adForm);
setActiveState(mapFilters);
