import {renderGuest, renderRoom} from './util.js';

const FEATURE_CLASS_INDEX = 1;
const MIN_PHOTOS_ARRAY_LENGTH = 1;
const FIRST_ARRAY_ELEMENT_INDEX = 0;

const APPARTMENTS_TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const renderCapasity = (rooms, guests) => `${rooms} ${renderRoom(rooms)} для ${guests} ${renderGuest(guests)}`;

const renderTime = (checkin, checkout) => `Заезд после ${checkin}, выезд до ${checkout}`;

const renderFeature = (featuresElements, featuresObj) => {
  if (!featuresObj) {
    featuresElements.delete;
  } else {
    featuresElements.forEach((featureElement) => {
      const featureModifier = featureElement.classList[FEATURE_CLASS_INDEX];
      if (!featuresObj.includes(featureModifier)) {
        featureElement.remove();
      }
    });
  }
};

const getFeaturesModifiers = (featuresArr, element) => {
  if (!featuresArr) {
    element.classList.add('hidden');
  } else {
    return featuresArr.map((feature) => `popup__feature--${feature}`);
  }
};

const renderPhotos = (photoArray, photosContainer) => {
  if (!photoArray) {
    photosContainer.classList.add('hidden');
  } else {
    const photoElement = photosContainer.querySelector('.popup__photo');
    photoElement.src = photoArray[FIRST_ARRAY_ELEMENT_INDEX];
    if (photoArray.length > MIN_PHOTOS_ARRAY_LENGTH) {
      photosContainer.innerHTML = '';
      photoArray.forEach((photo) => {
        const newPhoto = photoElement.cloneNode(true);
        newPhoto.src = photo;
        photosContainer.appendChild(newPhoto);
      });
    }
  }
};

const createNewPoup = (dataObj) => {
  const cardTemplate = document.querySelector('#card').content;
  const popup = cardTemplate.querySelector('.popup');
  const newPopup = popup.cloneNode(true);

  const {offer: {features, photos, title, address, price, type, rooms, guests, checkin, checkout, description}, author: {avatar}} = dataObj;
  const featuresContainer = newPopup.querySelector('.popup__features');
  const featutesList = featuresContainer.querySelectorAll('.popup__feature');
  const featuresModifiers = getFeaturesModifiers(features, featuresContainer);
  const photosList = photos;
  const photosContainer = newPopup.querySelector('.popup__photos');
  newPopup.querySelector('.popup__title').textContent = title;
  newPopup.querySelector('.popup__text--address').textContent = address;
  newPopup.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  newPopup.querySelector('.popup__type').textContent = APPARTMENTS_TYPE[type];
  newPopup.querySelector('.popup__text--capacity').textContent = renderCapasity(rooms, guests);
  newPopup.querySelector('.popup__text--time').textContent = renderTime(checkin, checkout);
  newPopup.querySelector('.popup__description').textContent = description;
  newPopup.querySelector('.popup__avatar').src = avatar;
  renderFeature(featutesList, featuresModifiers);
  renderPhotos(photosList, photosContainer);
  return newPopup;
};


export { createNewPoup };
