const TRIGGER_VALUE_FIRST = 1;
const TRIGGER_VALUE_SECOND = 4;
const TRIGGER_VALUE_THIRD = 20;
const NO_REST = 0;
const MIN_REST = 1;
const TRIGGER_DIVIDER = 10;
const ALERT_SHOW_TIME = 6000;
const DEDIMAL_PLACE = 5;
const ESC_KEY = 'Escape';
const ZERO_ARR_LENGTH = 0;
const DISABLED_FORM_CLASS = 'ad-form--disabled';

const renderRoom = (num) => {
  let roomValue = 'комната';
  if (num > TRIGGER_VALUE_FIRST && num <= TRIGGER_VALUE_SECOND) {
    roomValue = 'комнаты';
  }

  if (num > TRIGGER_VALUE_SECOND && num <= TRIGGER_VALUE_THIRD) {
    roomValue = 'комнат';
  }

  if (num >= TRIGGER_VALUE_THIRD) {
    if (
      num % TRIGGER_DIVIDER > TRIGGER_VALUE_FIRST &&
      num % TRIGGER_DIVIDER <= TRIGGER_VALUE_SECOND
    ) {
      roomValue = 'комнаты';
    }

    if (
      num % TRIGGER_DIVIDER > TRIGGER_VALUE_SECOND ||
      num % TRIGGER_DIVIDER === NO_REST
    ) {
      roomValue = 'комнат';
    }
  }
  return roomValue;
};

const renderGuest = (num) => {
  let guestValue = 'гостя';
  if (num > TRIGGER_VALUE_FIRST) {
    guestValue = 'гостей';
  }
  if (num > TRIGGER_VALUE_THIRD && num % TRIGGER_DIVIDER === MIN_REST) {
    guestValue = 'гостя';
  }
  return guestValue;
};

const addClass = (element, className) => {
  element.classList.toggle(className);
};

const removeClass = (element, className) => {
  element.classList.remove(className);
};

const changeAttributeDisabledState = (form, attributeDisabledState) => {
  const elementCollection = form.children;
  for (const element of elementCollection) {
    element.disabled = attributeDisabledState;
  }
};

const blockElement = (element) => {
  addClass(element, DISABLED_FORM_CLASS);
  changeAttributeDisabledState(element, true);
};

const unblockElement = (element) => {
  removeClass(element, DISABLED_FORM_CLASS);
  changeAttributeDisabledState(element, false);
};

const addToMap = (map, element) => {
  element.addTo(map);
};

const getAddressCoordinate = (coordinatesObj) => `${coordinatesObj.lat.toFixed(DEDIMAL_PLACE)}, ${coordinatesObj.lng.toFixed(DEDIMAL_PLACE)}`;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const backMarkerToOriginal = (addressInput, marker, coordinateObj) => {
  marker.setLatLng({
    lat: coordinateObj.lat,
    lng: coordinateObj.lng,
  });
};

const isAllowedFileType = (allowedTypesArr, fileName) => allowedTypesArr.some((allowedType) => fileName.endsWith(allowedType));

const isEscapeKey = (evt) => evt.key === ESC_KEY;

const removeMarkers = (map, markersGroup) => {
  markersGroup.remove(map);
};

const isZeroArrLength = (arr) => arr.length === ZERO_ARR_LENGTH;

export { unblockElement, renderGuest, renderRoom, addToMap, getAddressCoordinate, showAlert, backMarkerToOriginal, isEscapeKey, removeMarkers, isZeroArrLength, blockElement, isAllowedFileType};
