const getRundomIntNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

//пробовала ввести значение max меньше чем min и результат все равно вернул числа из диапозона min max
// вопрос, это какая-то особенность? Нужно ли страховаться и вносить условие при котором max и min будут меняться местами?


const getRandomNumber = (min, max, pointPlace) => {
  if (max < min) {
    const temporary = min;
    min = max;
    max = temporary;
  }

  let number = Number((Math.random() * (max - min + 1) + min).toFixed(pointPlace));
  if (number < 0) {
    number = number * (-1);
  }

  return number;
};

getRandomNumber(-4, 5, 5);
getRundomIntNumber(5, 10);
