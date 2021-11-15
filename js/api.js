import { showAlert } from './util.js';

const getDataAds = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        showAlert('Не удалось получить данные. Пожалуйста попробуйте еще раз');
      }
    })
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() =>
      showAlert('Не удалось получить данные. Пожалуйста попробуйте еще раз'));
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://24.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить данные. Пожалуйста попробуйте еще раз');
      }
    })
    .catch(() =>
      onFail('Не удалось отправить данные. Пожалуйста попробуйте еще раз'));
};

export { getDataAds, sendData };
