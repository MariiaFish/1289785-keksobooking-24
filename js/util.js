const TRIGGER_VALUE_FIRST = 1;
const TRIGGER_VALUE_SECOND = 4;
const TRIGGER_VALUE_THIRD = 20;
const NO_REST = 0;
const MIN_REST = 1;
const TRIGGER_DIVIDER = 10;


const getRundomIntNumber = (first, second) => {
  const lower = Math.ceil(Math.min(Math.abs(first), Math.abs(second)));
  const upper = Math.floor(Math.max(Math.abs(first), Math.abs(second)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomFloatNumber = (first, second, pointPlace) => {
  const lower = Math.ceil(Math.min(Math.abs(first), Math.abs(second)));
  const upper = Math.floor(Math.max(Math.abs(first), Math.abs(second)));
  return Number((Math.random() * (upper - lower) + lower).toFixed(pointPlace));
};

const getRandomArrayElement = (array, minValue) => {
  const elementIndex = getRundomIntNumber(minValue, array.length - 1);
  return array[elementIndex];
};

const getRandomArrayLength = (array, minValue) => {
  const newArray = array.slice();
  const newArrayLength = getRundomIntNumber(minValue, newArray.length);
  newArray.length = newArrayLength;
  return newArray;
};

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

const getAddressCoordinate = (coordinatesObj) => `${coordinatesObj.lat}, ${coordinatesObj.lng}`;

export { getRundomIntNumber, getRandomFloatNumber, getRandomArrayElement, getRandomArrayLength, renderGuest, renderRoom, addClass, removeClass, addAttributeDisabled, removeAttributeDisabled, addToMap, getAddressCoordinate};
