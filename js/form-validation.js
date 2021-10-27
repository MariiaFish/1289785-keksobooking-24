const NUL_VALUE = 0;
const MIN_CAPACITY_ARRAY_LENGHT = 1;
const COUNTER_VARIABLE = 1;

const adForm = document.querySelector('.ad-form');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');

const CAPACITY_TYPES = {
  1: ['для 1 гостя'],
  2: ['для 2 гостей', 'для 1 гостя'],
  3: ['для 3 гостей', 'для 2 гостей', 'для 1 гостя'],
  100: ['не для гостей'],
};

const createOptionCapacity = (valueAttribute, textContent) => {
  const newOption = document.createElement('option');
  newOption.value = valueAttribute;
  newOption.textContent = textContent;
  return newOption;
};

const validationRoomAndCapacity = (evt) => {
  capacity.innerHTML = '';
  const capacityTypes = CAPACITY_TYPES[evt.target.value];
  let valueAttribute = capacityTypes.length;
  for (let i = COUNTER_VARIABLE; i <= capacityTypes.length; i++) {
    let newOption = createOptionCapacity(valueAttribute, capacityTypes[i-COUNTER_VARIABLE]);
    if (capacityTypes.length === MIN_CAPACITY_ARRAY_LENGHT && capacityTypes[NUL_VALUE] === 'не для гостей') {
      newOption = createOptionCapacity(NUL_VALUE, capacityTypes[NUL_VALUE]);
    }
    capacity.appendChild(newOption);
    valueAttribute--;
  }
};

export { adForm, validationRoomAndCapacity, roomNumber };
