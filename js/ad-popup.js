import {renderGuest, renderRoom, isZeroArrLength} from './util.js';

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


const renderPhotos = (photosArray, photosContainer) => {
  if (!photosArray || isZeroArrLength(photosArray)) {
    photosContainer.classList.add('hidden');
    return;
  }

  const photoElement = photosContainer.querySelector('.popup__photo');

  photoElement.src = photosArray[FIRST_ARRAY_ELEMENT_INDEX];
  if (photosArray.length > MIN_PHOTOS_ARRAY_LENGTH) {
    photosContainer.innerHTML = '';
    photosArray.forEach((photo) => {
      const newPhoto = photoElement.cloneNode(true);
      newPhoto.src = photo;
      photosContainer.appendChild(newPhoto);
    });
  }
};

const renderFeatures = (featuresContainer, featuresArr) => {
  const featuresList = featuresContainer.querySelectorAll('.popup__feature');

  if (!featuresArr || isZeroArrLength(featuresArr)) {
    featuresContainer.remove();
    return;
  }

  featuresList.forEach((featuresListItem) => {
    const isFeature = featuresArr.some((featureArrElement) => featuresListItem.classList.contains(`popup__feature--${featureArrElement}`),
    );

    if (!isFeature) {
      featuresListItem.remove();
    }
  });
};


const createNewPoup = (dataObj) => {
  const cardTemplate = document.querySelector('#card').content;
  const popup = cardTemplate.querySelector('.popup');
  const newPopup = popup.cloneNode(true);

  const {offer: {features, photos, title, address, price, type, rooms, guests, checkin, checkout, description}, author: {avatar}} = dataObj;
  const featuresContainer = newPopup.querySelector('.popup__features');
  const photosContainer = newPopup.querySelector('.popup__photos');
  newPopup.querySelector('.popup__title').textContent = title;
  newPopup.querySelector('.popup__text--address').textContent = address;
  newPopup.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  newPopup.querySelector('.popup__type').textContent = APPARTMENTS_TYPE[type];
  newPopup.querySelector('.popup__text--capacity').textContent = renderCapasity(rooms, guests);
  newPopup.querySelector('.popup__text--time').textContent = renderTime(checkin, checkout);
  newPopup.querySelector('.popup__description').textContent = description;
  newPopup.querySelector('.popup__avatar').src = avatar;
  renderFeatures(featuresContainer, features);
  renderPhotos(photos, photosContainer);
  return newPopup;
};

export { createNewPoup };
