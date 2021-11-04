import {removeClass, removeAttributeDisabled, addClass, addAttributeDisabled} from './util.js';
import {adForm} from './form-validation.js';

const mapFilters = document.querySelector('.map__filters');
const mapAdditions = [mapFilters, adForm];

const setActiveState = (elements) => {
  elements.forEach((element) => {
    removeClass(element, 'ad-form--disabled');
    removeAttributeDisabled(element);
  });
};

const setInactiveState = (elements) => {
  elements.forEach((element) => {
    addClass(element, 'ad-form--disabled');
    addAttributeDisabled(element);
  });
};

export { setActiveState, setInactiveState, mapAdditions};
