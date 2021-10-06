const MIN = 0;
const MIN_ARRAY_LENGTH = 1;
const MAX = 1000000;
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const LOCATION_FLOAT_VALUE = 5;

const avatarValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const titles = ['Домик в Альпах', 'Дворец в Гилинджике', 'Вилла на берегу Испании', 'Место под палатку на моем заднем дворе', 'Убитая хата для тусовок', 'Уютная комнатка в сердце Амстердама', 'Огромный дом в Провансе', 'Аппартаменты твоей мечты в Праге'];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const timePoints = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const descriptions = ['Это именно то, что тебе нужно', 'Подходит только для богатых богачей', 'Здесь сбываются мечты', 'Идеально для вечеринок после сдачи сессии', 'Уютно и тепло как у мамы дома', 'Очень близко к звездам', 'Просто взгляните на эти фотки', 'Свежий запах моря'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

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

const getArrayElement = (array) => {
  const number = array.shift();
  return number > 9
    ? `img/avatars/user${number}.png`
    : `img/avatars/user0${number}.png`;
};

const getAd = function () {
  return {
    author: {
      avatar: getArrayElement(avatarValues),
    },
    offer: {
      title: getRandomArrayElement(titles, MIN),
      address: '',
      price: getRundomIntNumber(MIN, MAX),
      type: getRandomArrayElement(types, MIN),
      rooms: getRundomIntNumber(MIN, MAX),
      guests: getRundomIntNumber(MIN, MAX),
      checkin: getRandomArrayElement(timePoints, MIN),
      checkout: getRandomArrayElement(timePoints, MIN),
      features: getRandomArrayLength(features, MIN_ARRAY_LENGTH),
      description: getRandomArrayElement(descriptions, MIN),
      photos: getRandomArrayLength(photos, MIN_ARRAY_LENGTH),
    },
    location: {
      lat: getRandomFloatNumber(LAT_MIN, LAT_MAX, LOCATION_FLOAT_VALUE),
      lng: getRandomFloatNumber(LNG_MIN, LNG_MAX, LOCATION_FLOAT_VALUE),
    },
  };
};

const genArraay = () => Array.from({length: 10}, getAd);

genArraay();
