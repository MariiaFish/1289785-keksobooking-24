import { createSimilarAds, mapCanvas, adsArray } from './similarAds.js';
import {setActiveState, setInactiveState} from './setting-element-state.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const newPopups = createSimilarAds(adsArray);
mapCanvas.appendChild(newPopups[6]);

setInactiveState(adForm);
setInactiveState(mapFilters);

setActiveState(adForm);
setActiveState(mapFilters);
