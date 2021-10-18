import { getAd } from './ad.js';

const NO_REST = 0;
const MIN_REST = 1;
const TRIGGER_VALUE_FIRST = 1;
const TRIGGER_VALUE_SECOND = 4;
const TRIGGER_VALUE_THIRD = 20;
const TRIGGER_DIVIDER = 10;
const FEATURE_CLASS_INDEX = 1;
const MIN_PHOTOS_ARRAY_LENGTH = 1;
const FIRST_ARRAY_ELEMENT_INDEX = 0;
const NEW_ARRAY_LENGTH = 10;

const APPARTMENTS_TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

// для начала получим карточку template #card
const cardTemplate = document.querySelector('#card').content;
const popup = cardTemplate.querySelector('.popup');
const similarAds = [];

// найдем то место куда нам нужно вставить наш шаблон
const map = document.querySelector('.map');
const mapCanvas = map.querySelector('.map__canvas');

const genArraay = () => Array.from({ length: NEW_ARRAY_LENGTH }, getAd);
const adsArray = genArraay();

// Функция для выведения строки с кол-ом гостей и кол-ом комнат
const printRoomsGuests = (rooms, guests) => {
  let printRooms = 'комната для';
  let printGuests = 'гостя';

  if (rooms > TRIGGER_VALUE_FIRST && rooms <= TRIGGER_VALUE_SECOND) {
    printRooms = 'комнаты для';
  }

  if (rooms > TRIGGER_VALUE_SECOND && rooms <= TRIGGER_VALUE_THIRD) {
    printRooms = 'комнат для';
  }

  if (rooms  >= TRIGGER_VALUE_THIRD) {
    if (rooms % TRIGGER_DIVIDER > TRIGGER_VALUE_FIRST && rooms % TRIGGER_DIVIDER <= TRIGGER_VALUE_SECOND) {
      printRooms = 'комнаты для';
    }

    if (rooms % TRIGGER_DIVIDER > TRIGGER_VALUE_SECOND || rooms % TRIGGER_DIVIDER === NO_REST) {
      printRooms = 'комнат для';
    }
  }

  if (guests > TRIGGER_VALUE_FIRST) {
    printGuests = 'гостей';
  }
  if (guests > TRIGGER_VALUE_THIRD && guests % TRIGGER_DIVIDER === MIN_REST) {
    printGuests = 'гостя';
  }

  return `${rooms} ${printRooms} ${guests} ${printGuests}`;
};

// Функция для выведения строки временем заезда и временем выезда
const printCheckinCheckout = (checkin, checkout) => `Заезд после ${checkin}, выезд до ${checkout}`;

// Функция для выведения элементов массива features
const getFeature = (featuresElements, featuresObj) => {
  featuresElements.forEach((featureElement) => {
    const featureModifier = featureElement.classList[FEATURE_CLASS_INDEX];
    if (!featuresObj.includes(featureModifier)) {
      featureElement.remove();
    }
  });
};

// Функция для выведения элементов массива photos
const getPhotos = (photoArray, photosContainer) => {
  const photoElement = photosContainer.querySelector('.popup__photo');
  const newPhotoCollection = photosContainer.children;
  photoArray.forEach((photo) => {
    photoElement.src = photo;
    if (photoArray.length > MIN_PHOTOS_ARRAY_LENGTH) {
      const newPhoto = photoElement.cloneNode(true);
      newPhoto.src = photo;
      photosContainer.appendChild(newPhoto);
    }
  });

  if (newPhotoCollection.length > MIN_PHOTOS_ARRAY_LENGTH) {
    newPhotoCollection[FIRST_ARRAY_ELEMENT_INDEX].remove();
  }
};

// Теперь нам нужно написать функцию которая будет заменять значения в шаблоне на нащи сгенерированные
const createSimilarAds = () => {
  adsArray.forEach(({offer: {features, photos, title, address, price, type, rooms, guests, checkin, checkout, description}, author: {avatar}}) => {
    const newPopup = popup.cloneNode(true);
    const featuresContainer = newPopup.querySelector('.popup__features');
    const featutesList = featuresContainer.querySelectorAll('.popup__feature');
    const featuresModifiers = features.map((feature) => `popup__feature--${feature}`);
    const photosList = photos;
    const photosContainer = newPopup.querySelector('.popup__photos');
    newPopup.querySelector('.popup__title').textContent = title;
    newPopup.querySelector('.popup__text--address').textContent = address;
    newPopup.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
    newPopup.querySelector('.popup__type').textContent = APPARTMENTS_TYPE[type];
    newPopup.querySelector('.popup__text--capacity').textContent = printRoomsGuests(rooms, guests);
    newPopup.querySelector('.popup__text--time').textContent = printCheckinCheckout(checkin, checkout);
    newPopup.querySelector('.popup__description').textContent = description;
    newPopup.querySelector('.popup__avatar').src = avatar;
    getFeature(featutesList, featuresModifiers);
    getPhotos(photosList, photosContainer);
    similarAds.push(newPopup);
  });
};

createSimilarAds();

export { similarAds, mapCanvas };
