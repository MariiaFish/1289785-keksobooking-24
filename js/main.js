const MIN = 0;
const MIN_ARRAY_LENGTH = 1;
const MAX = 1000000;
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

let avatarNumber = 0;

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

const getOfferAddress = (object) =>
  object.offer.address = `${object.location.lat.toString()}, ${object.location.lng.toString()}`;

const getAd = () => {
  avatarNumber++;
  const ad = {
    author: {
      avatar: '',
    },
    offer: {
      title: getRandomArrayElement(TITLES, MIN),
      address: '',
      price: getRundomIntNumber(MIN, MAX),
      type: getRandomArrayElement(TYPES, MIN),
      rooms: getRundomIntNumber(MIN, MAX),
      guests: getRundomIntNumber(MIN, MAX),
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
  avatarNumber > 9
    ? (ad.author.avatar = `img/avatars/user${avatarNumber}.png`)
    : (ad.author.avatar = `img/avatars/user0${avatarNumber}.png`);
  return ad;
};

const genArraay = () => Array.from({length: 10}, getAd);

genArraay();
