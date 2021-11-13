import {resetForm, backMarkerToOriginal, addToMap} from './util.js';
import {adForm, address} from './form-validation.js';
import {tokyoCoordinate} from './map.js';
import { removeMarkers, mainMarker, createGroupOfMarker} from './markers.js';
import {getDataAds} from './api.js';
import {renderMap} from './map-setting.js';
import { setResetButtom, setSubmitAdForm, bodyElement } from './form-mode.js';
import { enableSuccessMessage } from './message-mode.js';
import {filterForm, getFilteredAdsArr} from './filter.js';

const MAX_ADS_COUNT = 10;

const mapFilter = document.querySelector('.map__filters');
const successMessageTemplate = document.querySelector('#success').content;
const successMessage = successMessageTemplate.querySelector('.success');
const resetButton = adForm.querySelector('.ad-form__reset');

const resetPage = () => {
  resetForm(adForm);
  resetForm(mapFilter);
  backMarkerToOriginal(address, mainMarker, tokyoCoordinate);
};

const getMarkersGroup = (adsArr) => {
  const markersGroup = createGroupOfMarker(adsArr.slice(0, MAX_ADS_COUNT));
  return markersGroup;
};

const activatePage = () => {
  const featuresFilterArr = [];
  const filterData = {};
  const renederedMap = renderMap();
  getDataAds((data) => {
    const adsArr = data;
    let newMarkersGroup = getMarkersGroup(adsArr);
    addToMap(renederedMap, newMarkersGroup);

    filterForm.addEventListener('change', (evt) => {
      const newAdsArr = getFilteredAdsArr(filterData, evt, adsArr, featuresFilterArr);
      removeMarkers(renederedMap, newMarkersGroup);
      newMarkersGroup = getMarkersGroup(newAdsArr);
      addToMap(renederedMap, newMarkersGroup);
    });

    filterForm.addEventListener('reset', (evt) => {
      const newAdsArr = getFilteredAdsArr(filterData, evt, adsArr, featuresFilterArr);
      removeMarkers(renederedMap, newMarkersGroup);
      newMarkersGroup = getMarkersGroup(newAdsArr);
      addToMap(renederedMap, newMarkersGroup);
    });

  });

  setSubmitAdForm(() => {
    enableSuccessMessage(successMessage, bodyElement);
    resetPage();
  });

  setResetButtom(resetButton);
};

export { resetPage, activatePage};
