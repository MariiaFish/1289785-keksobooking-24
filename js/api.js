import { showAlert } from './util.js';

const GET_DATA_ADDRESS = 'https://24.javascript.pages.academy/keksobooking/data';
const GET_DATA_ALERT_MESSGE = 'Не удалось получить данные. Пожалуйста попробуйте еще раз';
const POST_DATA_ADDRESS = 'https://24.javascript.pages.academy/keksobooking';
const POST_DATA_ALERT_MESSGE = 'Не удалось отправить данные. Пожалуйста попробуйте еще раз';

const getDataAds = (onSuccess) => {
  fetch(GET_DATA_ADDRESS)
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        showAlert(GET_DATA_ALERT_MESSGE);
      }
    })
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => showAlert(GET_DATA_ALERT_MESSGE));
};

const sendData = (onSuccess, onFail, body) => {
  fetch(POST_DATA_ADDRESS, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail(POST_DATA_ALERT_MESSGE);
      }
    })
    .catch(() =>
      onFail(POST_DATA_ALERT_MESSGE));
};

export { getDataAds, sendData };
