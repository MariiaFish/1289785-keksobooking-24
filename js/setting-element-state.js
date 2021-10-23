import {removeClass, removeAttributeDisabled, addClass, addAttributeDisabled} from './util.js';

const setActiveState = (element) => {
  removeClass(element, 'ad-form--disabled');
  removeAttributeDisabled(element);
};

const setInactiveState = (element) => {
  addClass(element, 'ad-form--disabled');
  addAttributeDisabled(element);
};

export { setActiveState, setInactiveState };
