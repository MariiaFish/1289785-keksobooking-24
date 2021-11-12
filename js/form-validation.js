const NUL_VALUE = 0;

const adForm = document.querySelector('.ad-form');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const type = adForm.querySelector('#type');
const price = adForm.querySelector('#price');
const timein = adForm.querySelector('#timein');
const timeout = adForm.querySelector('#timeout');
const address = adForm.querySelector('#address');

const capacityTypes = {
  1: ['для 1 гостя'],
  2: ['для 2 гостей', 'для 1 гостя'],
  3: ['для 3 гостей', 'для 2 гостей', 'для 1 гостя'],
  100: ['не для гостей'],
};

const minFlatPrices = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const getTargetValue = (evt) => evt.target.options[evt.target.selectedIndex].value;

const createOptionCapacity = (valueAttribute, textContent) => {
  const newOption = document.createElement('option');
  newOption.value = valueAttribute;
  newOption.textContent = textContent;
  return newOption;
};

const validationRoomAndCapacity = (evt) => {
  capacity.innerHTML = '';
  const selectedValue = getTargetValue(evt);
  const capacityValues = capacityTypes[selectedValue];
  let valueAttribute = capacityValues.length;
  capacityValues.forEach((element) => {
    let newOption = createOptionCapacity(valueAttribute, element);
    if (element === 'не для гостей') {
      newOption = createOptionCapacity(NUL_VALUE, element);
    }
    capacity.appendChild(newOption);
    valueAttribute--;
  });
};

const changeMinAndPlaceholder = (evt, element) => {
  const selectedValue = getTargetValue(evt);
  element.min = minFlatPrices[selectedValue];
  element.placeholder = minFlatPrices[selectedValue];
};


const moveSelectedAttribute = (evt, selectedMovedElement) => {
  const selectedValue = getTargetValue(evt);
  const selectedElements = selectedMovedElement.options;
  for (const selectedElement of selectedElements) {
    if (selectedElement.value === selectedValue) {
      selectedElement.selected = true;
    }
  }
};

export { adForm, validationRoomAndCapacity, roomNumber, type, price, changeMinAndPlaceholder, timeout, timein, moveSelectedAttribute, address};
