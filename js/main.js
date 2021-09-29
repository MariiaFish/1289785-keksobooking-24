const getRundomIntNumber = (min, max) => {
  if (max > min && min >= 0 && max > 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  throw new RangeError(
    'Ошибочные значения диапазона: первое значение должно быть меньше второго, а также диапазон может быть только положительный, включая ноль');
};

const getRandomNumber = (min, max, pointPlace) => {
  if (max > min && min >= 0 && max > 0) {
    return Number((Math.random() * (max - min) + min).toFixed(pointPlace));
  }
  throw new RangeError(
    'Ошибочные значения диапазона: первое значение должно быть меньше второго, а также диапазон может быть только положительный, включая ноль');
};

getRandomNumber(3.1, 3.2, 5);
getRundomIntNumber(5, 10);
