import { blockElement, unblockElement} from './util.js';
import { capacity, roomNumber, adForm, initialSetRoomsAndCapacity, setRoomsAndCapacity, type, price, changeMinAndPlaceholder, timeout, timein, setDepencyBySelectedValue} from './form-validation.js';
import {avatarInput, setAvatarPreview, avatarPreview, adPhotosInput, setAdPhotosPreview, adPhotosPreviewContainer} from './photo-preview.js';
import {sendData} from './api.js';
import {setErrorMessage} from './message-mode.js';
import {resetPage} from './page-mode.js';

const INITIAL_CAPACITY_VALUE = 1;
const INITIAL_PRICE_PLACEHOLDER_VALUE = 1000;
const INITIAL_PRICE_MIN_VALUE = 1000;
const INITIAL_USER_AVATAR = 'img/muffin-grey.svg';

const resetForm = (form) => {
  form.reset();
  capacity.value = INITIAL_CAPACITY_VALUE;
  price.placeholder = INITIAL_PRICE_PLACEHOLDER_VALUE;
  price.min = INITIAL_PRICE_MIN_VALUE;
  avatarPreview.src = INITIAL_USER_AVATAR;
  adPhotosPreviewContainer.innerHTML = '';
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
    setRoomsAndCapacity(evt);
  });

  avatarInput.addEventListener('change', () => {
    setAvatarPreview();
  });

  adPhotosInput.addEventListener('change', () => {
    setAdPhotosPreview();
  });

  type.addEventListener('change', (evt) => {
    changeMinAndPlaceholder(evt, price);
  });

  timein.addEventListener('change', (evt) => {
    setDepencyBySelectedValue(evt, timeout);
  });

  timeout.addEventListener('change', (evt) => {
    setDepencyBySelectedValue(evt, timein);
  });
};

const setActiveStateForm = (form) => {
  unblockElement(form);
  initialSetRoomsAndCapacity();
  addListenersToForm();
};

const setInactiveStateForm = (elements) => {
  elements.forEach((element) => {
    blockElement(element);
  });
};

export { resetForm, setActiveStateForm, setInactiveStateForm, setSubmitAdForm, setResetButtom};
