import { closeOnClick, closeOnEsc } from './util.js';
import {resetPage} from './page-mode.js';

const enableSuccessMessage = (template, element) => {
  const newSuccessMessage = template.cloneNode(true);
  element.appendChild(newSuccessMessage);
  closeOnEsc(newSuccessMessage);
  closeOnClick(window, newSuccessMessage);
  resetPage();
};

const enableErrorMessage = (template, element) => {
  const newErrorMessage = template.cloneNode(true);
  const closeButton = newErrorMessage.querySelector('.error__button');
  element.appendChild(newErrorMessage);
  closeOnEsc(newErrorMessage);
  closeOnClick(window, newErrorMessage);
  closeOnClick(closeButton, newErrorMessage);
};

export { enableSuccessMessage, enableErrorMessage };
