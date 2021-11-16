const TRIGGER_VALUE_FIRST = 1;
const TRIGGER_VALUE_SECOND = 4;
const TRIGGER_VALUE_THIRD = 20;
const NO_REST = 0;
const MIN_REST = 1;
const TRIGGER_DIVIDER = 10;
const ALERT_SHOW_TIME = 6000;
const DEDIMAL_PLACE = 5;
const ESC_KEY = 'Escape';

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

const addAttributeDisabled = (form) => {
  const elementCollection = form.children;
  for (const element of elementCollection) {
    element.disabled = true;
  }
};

const removeAttributeDisabled = (form) => {
  const elementCollection = form.children;
  for (const element of elementCollection) {
    element.disabled = false;
  }
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

const isEscapeKey = (evt) => evt.key === ESC_KEY;

const removeMarkers = (map, markersGroup) => {
  markersGroup.remove(map);
};

export { addClass, removeClass, renderGuest, renderRoom, addAttributeDisabled, removeAttributeDisabled, addToMap, getAddressCoordinate, showAlert, backMarkerToOriginal, isEscapeKey, removeMarkers};
