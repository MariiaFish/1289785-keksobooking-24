import { isEscapeKey} from './util.js';
import {resetPage} from './page-mode.js';

const bodyElement = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success').content;
const successMessage = successMessageTemplate.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content;
const errorMessage = errorMessageTemplate.querySelector('.error');

const getNewMessage = (template) => {
  const copyMessage = template.cloneNode(true);
  return copyMessage;
};

const newSuccessMessage = getNewMessage(successMessage);
const newErrorMessage = getNewMessage(errorMessage);

const closeSuccessMessageOnEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const closeErrorMessageOnEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
};

const closeSuccessMessageOnClick = (evt) => {
  evt.preventDefault();
  closeSuccessMessage();
};

const closeErrorMessageOnClick = (evt) => {
  evt.preventDefault();
  closeErrorMessage();
};

function closeSuccessMessage () {
  newSuccessMessage.remove();
  window.removeEventListener('keydown', closeSuccessMessageOnEsc);
  window.removeEventListener('click', closeSuccessMessageOnClick);
}

function closeErrorMessage() {
  newErrorMessage.remove();
  window.removeEventListener('keydown', closeErrorMessageOnEsc);
  window.removeEventListener('click', closeErrorMessageOnClick);
}

const closeOnEsc = (element, messageType) => {
  element.addEventListener('keydown', messageType);
};

const closeOnClick = (element, massegeType) =>  {
  element.addEventListener('click', massegeType);
};

const setSuccessMessage = () => {
  bodyElement.appendChild(newSuccessMessage);
  closeOnEsc(window, closeSuccessMessageOnEsc);
  closeOnClick(window, closeSuccessMessageOnClick);
  resetPage();
};

const setErrorMessage = () => {
  const closeButton = newErrorMessage.querySelector('.error__button');
  bodyElement.appendChild(newErrorMessage);
  closeOnEsc(window, closeErrorMessageOnEsc);
  closeOnClick(window, closeErrorMessageOnClick);
  closeOnClick(closeButton, closeErrorMessageOnClick);
};

export { setSuccessMessage, setErrorMessage };
