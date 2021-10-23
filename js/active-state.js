import {removeClass, removeAttributeDisabled} from './util.js';
// import {adForm} from './inactive-state';

const setActiveState = (element) => {
  removeClass(element, 'ad-form--disabled');
  removeAttributeDisabled(element);
};

export { setActiveState };
