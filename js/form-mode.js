import {removeClass, removeAttributeDisabled, addClass, addAttributeDisabled} from './util.js';
import { adForm, validationRoomAndCapacity, roomNumber, type, price, changeMinAndPlaceholder, timeout, timein, moveSelectedAttribute} from './form-validation.js';
import {sendData} from './api.js';
import {enableErrorMessage} from './message-mode.js';
import {resetPage} from './page-mode.js';

const mapFilters = document.querySelector('.map__filters');
const mapAdditions = [mapFilters, adForm];
const bodyElement = document.querySelector('body');
const errorMessageTemplate = document.querySelector('#error').content;
const errorMessage = errorMessageTemplate.querySelector('.error');

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

const setSubmitAdForm = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => enableErrorMessage(errorMessage, bodyElement),
      new FormData(evt.target),
    );
  });
};

const setResetButtom = (button) => {
  button.addEventListener('click', () => {
    resetPage();
  });
};

export { setActiveStateForm, setInactiveStateForm, mapAdditions, setSubmitAdForm, bodyElement, setResetButtom };
