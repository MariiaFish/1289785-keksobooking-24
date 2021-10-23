import {removeClass, removeAttributeDisabled} from './util.js';
// import {adForm} from './inactive-state';

const activeState = (element) => {
  removeClass(element, 'ad-form--disabled');
  removeAttributeDisabled(element);
};

export {activeState};
