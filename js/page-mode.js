import { backMarkerToOriginal, addToMap} from './util.js';
import {adForm, address} from './form-validation.js';
import {tokyoCoordinate} from './map.js';
import { removeMarkers, mainMarker, getMarkersGroup} from './markers.js';
import {getDataAds} from './api.js';
import {renderMap} from './map-setting.js';
import { resetForm, setResetButtom, setSubmitAdForm } from './form-mode.js';
import { setSuccessMessage } from './message-mode.js';
import {filterForm, getFilteredAdsArr} from './filter.js';

const RERENDER_DELAY = 500;

const mapFilter = document.querySelector('.map__filters');
const resetButton = adForm.querySelector('.ad-form__reset');

const resetPage = () => {
  resetForm(adForm);
  resetForm(mapFilter);
  backMarkerToOriginal(address, mainMarker, tokyoCoordinate);
};

const activatePage = () => {
  const filterFeatures = [];
  const filterData = {};
  const renederedMap = renderMap();
  getDataAds((data) => {
    const adsArr = data;
    let newMarkersGroup = getMarkersGroup(adsArr);
    addToMap(renederedMap, newMarkersGroup);

    filterForm.addEventListener('change', (_.debounce((evt) => {
      const newAdsArr = getFilteredAdsArr(filterData, evt, adsArr, filterFeatures);
      removeMarkers(renederedMap, newMarkersGroup);
      newMarkersGroup = getMarkersGroup(newAdsArr);
      addToMap(renederedMap, newMarkersGroup);
    }, RERENDER_DELAY)));

    filterForm.addEventListener('reset', (_.debounce(() => {
      removeMarkers(renederedMap, newMarkersGroup);
      newMarkersGroup = getMarkersGroup(adsArr);
      addToMap(renederedMap, newMarkersGroup);
    }, RERENDER_DELAY)));
  });

  setSubmitAdForm(() => {
    setSuccessMessage();
  });

  setResetButtom(resetButton);
};

export { resetPage, activatePage};
