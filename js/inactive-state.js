import { addClass, addAttributeDisabled } from './util.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const setInactiveState = (element) => {
  addClass(element, 'ad-form--disabled');
  addAttributeDisabled(element);
};

export {setInactiveState, adForm, mapFilters};
