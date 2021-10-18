import {getRundomIntNumber, getRandomFloatNumber, getRandomArrayElement, getRandomArrayLength} from './util.js';

const MIN = 0;
const MIN_ARRAY_LENGTH = 1;
const MAX = 1000000;
const MAX_ROOMS = 100;
const MAX_GUESTS = 100;
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const LOCATION_FLOAT_VALUE = 5;

const TITLES = ['Домик в Альпах', 'Дворец в Гилинджике', 'Вилла на берегу Испании', 'Место под палатку на моем заднем дворе', 'Убитая хата для тусовок', 'Уютная комнатка в сердце Амстердама', 'Огромный дом в Провансе', 'Аппартаменты твоей мечты в Праге'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME_POINTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['Это именно то, что тебе нужно', 'Подходит только для богатых богачей', 'Здесь сбываются мечты', 'Идеально для вечеринок после сдачи сессии', 'Уютно и тепло как у мамы дома', 'Очень близко к звездам', 'Просто взгляните на эти фотки', 'Свежий запах моря'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];


const getAvatarAddress = () => {
  let avatarNumber = 0;
  return function () {
    avatarNumber++;
    return avatarNumber > 9
      ? `img/avatars/user${avatarNumber}.png`
      : `img/avatars/user0${avatarNumber}.png`;
  };
};

const avatarAddress = getAvatarAddress();

const getOfferAddress = (object) =>
  object.offer.address = `${object.location.lat.toString()}, ${object.location.lng.toString()}`;

const getAd = () => {
  const ad = {
    author: {
      avatar: avatarAddress(),
    },
    offer: {
      title: getRandomArrayElement(TITLES, MIN),
      address: '',
      price: getRundomIntNumber(MIN, MAX),
      type: getRandomArrayElement(TYPES, MIN),
      rooms: getRundomIntNumber(MIN, MAX_ROOMS),
      guests: getRundomIntNumber(MIN, MAX_GUESTS),
      checkin: getRandomArrayElement(TIME_POINTS, MIN),
      checkout: getRandomArrayElement(TIME_POINTS, MIN),
      features: getRandomArrayLength(FEATURES, MIN_ARRAY_LENGTH),
      description: getRandomArrayElement(DESCRIPTIONS, MIN),
      photos: getRandomArrayLength(PHOTOS, MIN_ARRAY_LENGTH),
    },
    location: {
      lat: getRandomFloatNumber(LAT_MIN, LAT_MAX, LOCATION_FLOAT_VALUE),
      lng: getRandomFloatNumber(LNG_MIN, LNG_MAX, LOCATION_FLOAT_VALUE),
    },
  };
  getOfferAddress(ad);
  return ad;
};

export { getAd };
