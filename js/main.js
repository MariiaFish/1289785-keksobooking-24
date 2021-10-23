import { createSimilarAds, mapCanvas, adsArray } from './similarAds.js';
import {setInactiveState, mapFilters, adForm} from './inactive-state.js';
import {setActiveState} from './active-state.js';

const newPopups = createSimilarAds(adsArray);
mapCanvas.appendChild(newPopups[6]);

setInactiveState(adForm);
setInactiveState(mapFilters);

setActiveState(adForm);
setActiveState(mapFilters);
