import {removeClass, removeAttributeDisabled, addClass, addAttributeDisabled} from './util.js';
import { capacity, roomNumber, adForm, validationRoomAndCapacity, type, price, changeMinAndPlaceholder, timeout, timein, moveSelectedAttribute} from './form-validation.js';
import {sendData} from './api.js';
import {setErrorMessage} from './message-mode.js';
import {resetPage} from './page-mode.js';

const INITIAL_CAPACITY_VALUE = 1;
const INITIAL_PRICE_PLACEHOLDER_VALUE = 1000;
const INITIAL_PRICE_MIN_VALUE = 1000;

const mapFilters = document.querySelector('.map__filters');
const mapAdditions = [mapFilters, adForm];
const bodyElement = document.querySelector('body');

const resetForm = (form) => {
  form.reset();
  capacity.value = INITIAL_CAPACITY_VALUE;
  price.placeholder = INITIAL_PRICE_PLACEHOLDER_VALUE;
  price.min = INITIAL_PRICE_MIN_VALUE;
};

const setSubmitAdForm = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => setErrorMessage(),
      new FormData(evt.target),
    );
  });
};

const setResetButtom = (button) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetPage();
  });
};


const addListenersToForm = () => {

  roomNumber.addEventListener('change', (evt) => {
    validationRoomAndCapacity(evt);
  });

  type.addEventListener('change', (evt) => {
    changeMinAndPlaceholder(evt, price);
  });

  timein.addEventListener('change', (evt) => {
    moveSelectedAttribute(evt, timeout);
  });

  timeout.addEventListener('change', (evt) => {
    moveSelectedAttribute(evt, timein);
  });
};

const setActiveStateForm = (elements) => {
  elements.forEach((element) => {
    removeClass(element, 'ad-form--disabled');
    removeAttributeDisabled(element);
  });
  addListenersToForm();
};

const setInactiveStateForm = (elements) => {
  elements.forEach((element) => {
    addClass(element, 'ad-form--disabled');
    addAttributeDisabled(element);
  });
};

export { resetForm, setActiveStateForm, setInactiveStateForm, mapAdditions, setSubmitAdForm, bodyElement, setResetButtom};
