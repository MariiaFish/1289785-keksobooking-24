import { createSimilarAds, mapCanvas, adsArray } from './similarAds.js';

const newPopups = createSimilarAds(adsArray);
mapCanvas.appendChild(newPopups[6]);
